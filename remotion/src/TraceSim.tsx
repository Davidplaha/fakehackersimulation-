import React, {useMemo} from 'react';
import {
  AbsoluteFill,
  interpolate,
  random,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

export type TraceSimProps = {
  targetLabel: string;
  targetId: string;
  seed: number;
};

const mono = `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`;
const grotesk = `"Space Grotesk", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Arial, sans-serif`;

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

const typeSlice = (full: string, frame: number, startFrame: number, cps: number, fps: number) => {
  const t = Math.max(0, frame - startFrame) / fps;
  const chars = Math.floor(t * cps);
  return full.slice(0, Math.max(0, chars));
};

const Grid: React.FC = () => {
  const {width, height} = useVideoConfig();
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const drift = interpolate(frame, [0, 8 * fps], [0, 32], {extrapolateRight: 'clamp'});
  const opacity = interpolate(frame, [0, 10], [0, 1], {extrapolateRight: 'clamp'});

  const lines = useMemo(() => {
    const out: React.ReactNode[] = [];
    const step = 64;
    for (let x = -step; x <= width + step; x += step) {
      out.push(
        <div
          key={`vx-${x}`}
          style={{
            position: 'absolute',
            left: x,
            top: 0,
            width: 1,
            height,
            background: 'rgba(120, 255, 200, 0.09)',
          }}
        />,
      );
    }
    for (let y = -step; y <= height + step; y += step) {
      out.push(
        <div
          key={`hy-${y}`}
          style={{
            position: 'absolute',
            left: 0,
            top: y,
            width,
            height: 1,
            background: 'rgba(120, 255, 200, 0.08)',
          }}
        />,
      );
    }
    return out;
  }, [height, width]);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        transform: `translate3d(${-drift}px, ${-drift / 2}px, 0)`,
        opacity,
      }}
    >
      {lines}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(900px 520px at 72% 44%, rgba(72, 255, 200, 0.16), rgba(0,0,0,0) 60%)',
        }}
      />
    </div>
  );
};

const ScanBeam: React.FC<{seed: number}> = ({seed}) => {
  const {width, height, fps} = useVideoConfig();
  const frame = useCurrentFrame();
  const p = (frame % Math.floor(2.2 * fps)) / (2.2 * fps);
  const y = interpolate(p, [0, 1], [-120, height + 120]);
  const wobble = (random(seed + frame / 20) - 0.5) * 6;

  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: y,
        width,
        height: 140,
        transform: `translate3d(${wobble}px, 0, 0)`,
        background:
          'linear-gradient(180deg, rgba(0,0,0,0), rgba(96, 255, 196, 0.20), rgba(96, 255, 196, 0.08), rgba(0,0,0,0))',
        filter: 'blur(0.2px)',
        mixBlendMode: 'screen',
        opacity: 0.9,
      }}
    />
  );
};

const TargetSilhouette: React.FC<{progress: number}> = ({progress}) => {
  const glow = 0.5 + progress * 0.5;
  return (
    <div
      style={{
        position: 'relative',
        width: 220,
        height: 220,
        borderRadius: 18,
        background: 'rgba(10, 14, 18, 0.78)',
        border: '1px solid rgba(124, 255, 210, 0.24)',
        boxShadow: `0 0 0 1px rgba(0,0,0,0.6), 0 28px 80px rgba(0,0,0,0.55), 0 0 40px rgba(98,255,198,${0.18 * glow})`,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: -80,
          background:
            'radial-gradient(220px 220px at 55% 38%, rgba(102,255,198,0.38), rgba(0,0,0,0) 60%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: 48,
          width: 72,
          height: 72,
          transform: 'translateX(-50%)',
          borderRadius: '999px',
          background: 'rgba(190, 255, 232, 0.14)',
          border: '1px solid rgba(124,255,210,0.44)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: 118,
          width: 140,
          height: 104,
          transform: 'translateX(-50%)',
          borderRadius: 54,
          background: 'rgba(190, 255, 232, 0.10)',
          border: '1px solid rgba(124,255,210,0.36)',
          clipPath: 'inset(0 0 0 0 round 54px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'repeating-linear-gradient(180deg, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 5px, rgba(124,255,210,0.06) 6px)',
          opacity: 0.85,
          mixBlendMode: 'overlay',
        }}
      />
    </div>
  );
};

const MapPanel: React.FC<{seed: number; progress: number}> = ({seed, progress}) => {
  const {fps, width, height} = useVideoConfig();
  const frame = useCurrentFrame();
  const panelW = Math.round(width * 0.58);
  const panelH = Math.round(height * 0.72);

  const lockIn = spring({
    frame,
    fps,
    config: {damping: 16, mass: 0.8, stiffness: 120},
    durationInFrames: Math.floor(1.2 * fps),
  });
  const zoom = interpolate(lockIn, [0, 1], [1.06, 1], {extrapolateRight: 'clamp'});
  const mapOpacity = interpolate(frame, [0, 14], [0, 1], {extrapolateRight: 'clamp'});

  const pulse = 0.5 + 0.5 * Math.sin((frame / fps) * Math.PI * 2 * 1.4);
  const pulse2 = 0.5 + 0.5 * Math.sin((frame / fps) * Math.PI * 2 * 0.8 + 1.7);

  const points = useMemo(() => {
    return new Array(16).fill(true).map((_, i) => {
      const rx = random(seed + i * 9) * 0.92 + 0.04;
      const ry = random(seed + i * 17) * 0.82 + 0.09;
      const pop = random(seed + i * 31);
      return {rx, ry, pop};
    });
  }, [seed]);

  const center = {x: panelW * 0.65, y: panelH * 0.52};

  return (
    <div
      style={{
        width: panelW,
        height: panelH,
        borderRadius: 20,
        background: 'rgba(6, 10, 14, 0.76)',
        border: '1px solid rgba(124,255,210,0.22)',
        boxShadow: '0 28px 110px rgba(0,0,0,0.55)',
        overflow: 'hidden',
        position: 'relative',
        opacity: mapOpacity,
        transform: `scale(${zoom})`,
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(1100px 520px at 60% 60%, rgba(98,255,198,0.14), rgba(0,0,0,0) 62%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0) 25%, rgba(0,0,0,0.34) 100%)',
        }}
      />

      <div style={{position: 'absolute', inset: 0, opacity: 0.95}}>
        <Grid />
      </div>

      {points.map((p, idx) => {
        const fade = clamp01(progress + p.pop * 0.2);
        return (
          <div
            key={idx}
            style={{
              position: 'absolute',
              left: Math.round(p.rx * panelW),
              top: Math.round(p.ry * panelH),
              width: 6,
              height: 6,
              borderRadius: 99,
              background: `rgba(124,255,210,${0.22 + 0.38 * fade})`,
              boxShadow: `0 0 0 6px rgba(124,255,210,${0.04 + 0.09 * fade})`,
            }}
          />
        );
      })}

      <svg
        width={panelW}
        height={panelH}
        viewBox={`0 0 ${panelW} ${panelH}`}
        style={{position: 'absolute', inset: 0}}
      >
        <defs>
          <linearGradient id="traceLine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="rgba(124,255,210,0.00)" />
            <stop offset="0.35" stopColor="rgba(124,255,210,0.55)" />
            <stop offset="1" stopColor="rgba(124,255,210,0.00)" />
          </linearGradient>
        </defs>
        <path
          d={`M ${panelW * 0.1} ${panelH * 0.85} C ${panelW * 0.3} ${panelH * 0.25}, ${
            panelW * 0.58
          } ${panelH * 0.88}, ${center.x} ${center.y}`}
          stroke="url(#traceLine)"
          strokeWidth={2}
          fill="none"
          opacity={0.55 + 0.3 * progress}
        />
      </svg>

      <div
        style={{
          position: 'absolute',
          left: center.x - 10,
          top: center.y - 10,
          width: 20,
          height: 20,
          borderRadius: 99,
          border: '2px solid rgba(140,255,214,0.95)',
          boxShadow: `0 0 0 ${8 + 10 * pulse}px rgba(124,255,210,${0.10 + 0.14 * pulse})`,
          background: 'rgba(124,255,210,0.10)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: center.x - 28,
          top: center.y - 28,
          width: 56,
          height: 56,
          borderRadius: 99,
          border: '1px solid rgba(124,255,210,0.22)',
          boxShadow: `0 0 0 ${14 + 18 * pulse2}px rgba(124,255,210,${0.04 + 0.06 * pulse2})`,
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: 18,
          top: 14,
          padding: '8px 10px',
          borderRadius: 12,
          border: '1px solid rgba(124,255,210,0.20)',
          background: 'rgba(0,0,0,0.42)',
          fontFamily: mono,
          fontSize: 12,
          color: 'rgba(200,255,236,0.94)',
          letterSpacing: 0.6,
        }}
      >
        TRACE VISUALIZER
      </div>

      <div
        style={{
          position: 'absolute',
          right: 14,
          bottom: 12,
          fontFamily: mono,
          fontSize: 11,
          color: 'rgba(200,255,236,0.74)',
          letterSpacing: 0.5,
          textTransform: 'uppercase',
        }}
      >
        Simulation only
      </div>
    </div>
  );
};

export const TraceSim: React.FC<TraceSimProps> = ({targetId, targetLabel, seed}) => {
  const frame = useCurrentFrame();
  const {fps, width, height} = useVideoConfig();

  const t = frame / fps;
  const progress = clamp01((t - 0.5) / 4.2);

  const enter = spring({
    frame,
    fps,
    config: {damping: 18, mass: 0.9, stiffness: 120},
    durationInFrames: Math.floor(1.0 * fps),
  });
  const y = interpolate(enter, [0, 1], [24, 0], {extrapolateRight: 'clamp'});
  const fade = interpolate(frame, [0, 10], [0, 1], {extrapolateRight: 'clamp'});

  const termLine1 = 'establishing link: relay-04.sim';
  const termLine2 = 'handshake ok. loading telemetry...';
  const termLine3 = 'triangulating signal...';
  const termLine4 = 'lock acquired. location: UNKNOWN (SIM)';

  const ipA = `203.0.113.${10 + Math.floor(random(seed) * 180)}`;
  const ipB = `198.51.100.${20 + Math.floor(random(seed + 1) * 170)}`;

  return (
    <AbsoluteFill
      style={{
        background: 'radial-gradient(1200px 720px at 30% 20%, #122018, #040709 60%, #020406 100%)',
        color: 'white',
        fontFamily: grotesk,
      }}
    >
      <div style={{position: 'absolute', inset: 0, opacity: 0.5}}>
        <Grid />
      </div>

      <ScanBeam seed={seed} />

      <div
        style={{
          position: 'absolute',
          left: 44,
          right: 44,
          top: 40,
          bottom: 40,
          display: 'flex',
          gap: 26,
          transform: `translate3d(0, ${y}px, 0)`,
          opacity: fade,
        }}
      >
        <div style={{width: Math.round(width * 0.34), display: 'flex', flexDirection: 'column', gap: 18}}>
          <div
            style={{
              padding: '14px 16px',
              borderRadius: 18,
              border: '1px solid rgba(124,255,210,0.22)',
              background: 'rgba(0,0,0,0.32)',
              boxShadow: '0 20px 80px rgba(0,0,0,0.45)',
            }}
          >
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <div style={{fontWeight: 700, letterSpacing: 0.3}}>SIMDECK TRACE</div>
              <div
                style={{
                  fontFamily: mono,
                  fontSize: 12,
                  color: 'rgba(200,255,236,0.86)',
                  letterSpacing: 0.6,
                }}
              >
                {targetId}
              </div>
            </div>
            <div style={{marginTop: 6, fontFamily: mono, fontSize: 12, color: 'rgba(200,255,236,0.68)'}}>
              Visual-only. No real tracking.
            </div>
          </div>

          <TargetSilhouette progress={progress} />

          <div
            style={{
              padding: 14,
              borderRadius: 18,
              border: '1px solid rgba(124,255,210,0.22)',
              background: 'rgba(0,0,0,0.34)',
            }}
          >
            <div style={{fontFamily: mono, fontSize: 12, color: 'rgba(200,255,236,0.76)', marginBottom: 8}}>
              TARGET
            </div>
            <div style={{fontWeight: 700, fontSize: 22, letterSpacing: 0.2}}>{targetLabel}</div>
            <div
              style={{
                marginTop: 10,
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 10,
              }}
            >
              <div style={{padding: 10, borderRadius: 14, background: 'rgba(124,255,210,0.06)'}}>
                <div style={{fontFamily: mono, fontSize: 11, color: 'rgba(200,255,236,0.70)'}}>ENTRY NODE</div>
                <div style={{fontFamily: mono, marginTop: 4, fontSize: 12, color: 'rgba(210,255,240,0.96)'}}>
                  {ipA}
                </div>
              </div>
              <div style={{padding: 10, borderRadius: 14, background: 'rgba(124,255,210,0.06)'}}>
                <div style={{fontFamily: mono, fontSize: 11, color: 'rgba(200,255,236,0.70)'}}>EXIT NODE</div>
                <div style={{fontFamily: mono, marginTop: 4, fontSize: 12, color: 'rgba(210,255,240,0.96)'}}>
                  {ipB}
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              padding: 14,
              borderRadius: 18,
              border: '1px solid rgba(124,255,210,0.22)',
              background: 'rgba(0,0,0,0.36)',
              fontFamily: mono,
              fontSize: 12,
              lineHeight: 1.35,
              color: 'rgba(210,255,240,0.92)',
              minHeight: 130,
            }}
          >
            <div>{typeSlice(termLine1, frame, Math.floor(0.3 * fps), 28, fps)}</div>
            <div>{typeSlice(termLine2, frame, Math.floor(0.85 * fps), 28, fps)}</div>
            <div>{typeSlice(termLine3, frame, Math.floor(1.45 * fps), 28, fps)}</div>
            <div style={{color: 'rgba(124,255,210,0.95)'}}>
              {typeSlice(termLine4, frame, Math.floor(2.05 * fps), 28, fps)}
            </div>
            <div style={{marginTop: 8, color: 'rgba(210,255,240,0.70)'}}>
              {progress > 0.6 ? 'status: LOCKED (SIMULATED)' : 'status: SCANNING...'}
            </div>
          </div>
        </div>

        <div style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
          <MapPanel seed={seed} progress={progress} />
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 16,
          textAlign: 'center',
          fontFamily: mono,
          fontSize: 11,
          letterSpacing: 1.2,
          color: 'rgba(200,255,236,0.6)',
          textTransform: 'uppercase',
        }}
      >
        simulation / fake
      </div>
    </AbsoluteFill>
  );
};

