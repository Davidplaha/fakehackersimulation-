import React, {useMemo} from 'react';
import {
  AbsoluteFill,
  interpolate,
  random,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

export type CriticalDownloadProps = {
  seed: number;
  nodeLabel: string;
};

const mono =
  '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';
const grotesk =
  '"Space Grotesk", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Arial, sans-serif';

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

const WorldMapSilhouette: React.FC = () => {
  // Original, stylized silhouettes (not traced from any third-party map asset).
  return (
    <svg
      viewBox="0 0 1200 600"
      style={{
        width: '100%',
        height: '100%',
        display: 'block',
        opacity: 0.18,
      }}
    >
      <rect width="1200" height="600" fill="black" />
      <g fill="white">
        <path
          d="M250 95c25-22 70-20 95 6 15 15 10 36-8 52-30 26-83 24-108-3-17-19-10-39 21-55z"
          opacity="0.9"
        />
        <path
          d="M135 165c42-52 123-78 203-68 44 6 76 24 94 52 14 23 10 44-8 64-18 19-42 30-63 35-18 4-26 13-33 24-12 20-34 33-63 39-30 6-59 3-86-9-26-11-44-29-52-53-8-25-2-52 8-84z"
          opacity="0.95"
        />
        <path
          d="M360 270c18-10 38-8 48 6 8 12 1 26-12 35-18 12-35 10-44-1-10-12-7-30 8-40z"
          opacity="0.9"
        />
        <path
          d="M392 312c26-15 58-13 77 7 14 15 14 38 1 64-13 26-22 55-24 83-1 23-7 43-18 58-13 18-30 22-48 13-19-10-31-28-34-52-4-27 1-61 12-97 11-35 18-60 34-76z"
          opacity="0.95"
        />
        <path
          d="M560 180c30-28 78-38 120-26 26 7 45 23 52 44 7 22-2 41-22 56-29 21-68 26-106 16-28-8-48-24-55-45-7-21-2-33 11-45z"
          opacity="0.93"
        />
        <path
          d="M600 258c26-24 66-28 97-12 25 13 40 37 42 68 2 31-9 68-27 101-15 28-18 55-20 81-2 24-14 40-34 47-22 7-44-1-61-22-20-26-30-61-30-100 0-47 12-91 33-125z"
          opacity="0.95"
        />
        <path
          d="M712 268c18-14 46-16 68-3 16 10 21 27 12 45-10 20-32 33-56 34-22 2-39-8-45-25-6-18 3-38 21-51z"
          opacity="0.9"
        />
        <path
          d="M675 160c56-52 162-76 270-62 80 10 145 40 167 84 16 31 7 57-22 78-31 22-78 33-126 33-39 1-68 10-94 25-35 20-79 30-129 28-65-3-115-25-141-60-29-40-23-85 75-126z"
          opacity="0.95"
        />
        <path
          d="M900 350c22-14 56-12 74 5 12 12 10 27-3 41-17 18-45 24-70 16-21-7-30-25-22-41 4-9 10-16 21-21z"
          opacity="0.9"
        />
        <path
          d="M930 430c34-30 86-36 127-13 26 15 35 41 23 66-15 31-56 54-97 54-37 0-69-16-81-41-11-22-3-44 28-66z"
          opacity="0.95"
        />
      </g>
    </svg>
  );
};

const GridAndScanlines: React.FC<{seed: number}> = ({seed}) => {
  const {width, height, fps} = useVideoConfig();
  const frame = useCurrentFrame();
  const drift = interpolate(frame, [0, 10 * fps], [0, 26], {extrapolateRight: 'clamp'});
  const flicker = 0.9 + random(seed + Math.floor(frame / 3)) * 0.1;

  const lines = useMemo(() => {
    const out: React.ReactNode[] = [];
    const step = 44;
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
            background: 'rgba(255,255,255,0.06)',
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
            background: 'rgba(255,255,255,0.05)',
          }}
        />,
      );
    }
    return out;
  }, [height, width]);

  return (
    <div style={{position: 'absolute', inset: 0, opacity: 0.28 * flicker}}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          transform: `translate3d(${-drift}px, ${-drift / 2}px, 0)`,
        }}
      >
        {lines}
      </div>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(900px 520px at 50% 50%, rgba(255,255,255,0.06), rgba(0,0,0,0) 62%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'repeating-linear-gradient(180deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, rgba(0,0,0,0) 6px, rgba(0,0,0,0) 10px)',
          mixBlendMode: 'overlay',
          opacity: 0.22,
        }}
      />
    </div>
  );
};

const CriticalBox: React.FC<{
  progress01: number;
  seed: number;
  nodeLabel: string;
}> = ({progress01, seed, nodeLabel}) => {
  const {fps} = useVideoConfig();
  const frame = useCurrentFrame();

  const dotPhase = (Math.floor(frame / Math.floor(fps / 3)) % 4) + 1;
  const dots = '.'.repeat(dotPhase);

  const segments = 56;
  const filled = Math.floor(progress01 * segments);

  const packets = Math.floor(progress01 * 480_000);
  const rate = (2.0 + progress01 * 9.5 + random(seed + Math.floor(frame / 10)) * 2.0).toFixed(1);

  const glow = 0.55 + 0.45 * Math.sin((frame / fps) * Math.PI * 2 * 0.55);

  return (
    <div
      style={{
        position: 'relative',
        width: 980,
        maxWidth: '92vw',
        padding: '52px 56px 34px',
        borderRadius: 10,
        border: '3px solid rgba(255, 0, 0, 0.92)',
        background: 'rgba(0, 0, 0, 0.72)',
        boxShadow: `0 0 0 1px rgba(255,0,0,0.16) inset, 0 0 60px rgba(255,0,0,${
          0.32 * glow
        }), 0 0 160px rgba(255,0,0,${0.14 * glow})`,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: -40,
          background:
            'radial-gradient(900px 240px at 50% 0%, rgba(255, 35, 35, 0.16), rgba(0,0,0,0) 70%), radial-gradient(900px 240px at 50% 100%, rgba(255, 35, 35, 0.12), rgba(0,0,0,0) 70%)',
          filter: 'blur(1px)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0) 22%, rgba(0,0,0,0) 78%, rgba(255,0,0,0.05))',
          opacity: 0.55,
          mixBlendMode: 'overlay',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          fontFamily: grotesk,
          fontWeight: 900,
          fontSize: 64,
          letterSpacing: 6,
          textTransform: 'uppercase',
          color: '#ff9a1f',
          textShadow: '0 0 24px rgba(255,154,31,0.22)',
          textAlign: 'center',
        }}
      >
        DOWNLOADING{dots}
      </div>

      <div
        style={{
          marginTop: 10,
          fontFamily: mono,
          fontSize: 16,
          letterSpacing: 7,
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.78)',
          textAlign: 'center',
        }}
      >
        CRITICAL DATA
      </div>

      <div style={{marginTop: 26}}>
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            marginBottom: 10,
            fontFamily: mono,
            fontSize: 11,
            letterSpacing: 3,
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.62)',
          }}
        >
          <div>TRANSFER</div>
          <div style={{color: 'rgba(255,255,255,0.9)'}}>{Math.round(progress01 * 100)}%</div>
        </div>

        <div
          style={{
            height: 30,
            borderRadius: 7,
            border: '2px solid rgba(255,0,0,0.72)',
            background: 'rgba(20,0,0,0.60)',
            padding: 6,
            display: 'flex',
            gap: 3,
            boxShadow:
              '0 0 0 1px rgba(255,255,255,0.05) inset, 0 0 28px rgba(255,0,0,0.22) inset',
          }}
        >
          {new Array(segments).fill(true).map((_, i) => {
            const on = i < filled;
            const head = i === filled - 1;
            return (
              <div
                key={i}
                style={{
                  flex: 1,
                  borderRadius: 3,
                  background: on ? 'rgba(255,0,0,0.95)' : 'rgba(255,255,255,0.10)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  boxShadow: on
                    ? `0 0 14px rgba(255,0,0,${head ? 0.85 : 0.55})`
                    : 'none',
                  opacity: on ? 1 : 0.9,
                }}
              />
            );
          })}
        </div>
      </div>

      <div
        style={{
          marginTop: 18,
          display: 'flex',
          gap: 18,
          justifyContent: 'center',
          flexWrap: 'wrap',
          fontFamily: mono,
          fontSize: 12,
          letterSpacing: 2,
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.68)',
        }}
      >
        <div>
          PACKETS <span style={{color: 'rgba(255,255,255,0.92)', marginLeft: 8}}>{packets}</span>
        </div>
        <div>
          RATE <span style={{color: 'rgba(255,255,255,0.92)', marginLeft: 8}}>{rate} TB/s</span>
        </div>
        <div>
          NODE <span style={{color: 'rgba(255,255,255,0.92)', marginLeft: 8}}>{nodeLabel}</span>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          right: 18,
          bottom: 14,
          fontFamily: mono,
          fontSize: 10,
          letterSpacing: 2,
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.52)',
        }}
      >
        simulation only
      </div>
    </div>
  );
};

export const CriticalDownload: React.FC<CriticalDownloadProps> = ({seed, nodeLabel}) => {
  const {fps} = useVideoConfig();
  const frame = useCurrentFrame();

  const lockIn = spring({
    frame,
    fps,
    config: {damping: 16, mass: 0.9, stiffness: 120},
    durationInFrames: Math.floor(1.2 * fps),
  });

  const progress01 = clamp01(interpolate(frame, [Math.floor(0.8 * fps), 9 * fps], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  }));

  const zoom = interpolate(lockIn, [0, 1], [1.05, 1], {extrapolateRight: 'clamp'});
  const fade = interpolate(frame, [0, 10], [0, 1], {extrapolateRight: 'clamp'});

  return (
    <AbsoluteFill
      style={{
        background: '#000',
        fontFamily: grotesk,
      }}
    >
      <AbsoluteFill
        style={{
          opacity: fade,
        }}
      >
        <AbsoluteFill
          style={{
            filter: 'grayscale(1) contrast(1.15) brightness(0.70)',
            opacity: 0.92,
          }}
        >
          <WorldMapSilhouette />
        </AbsoluteFill>

        <GridAndScanlines seed={seed} />

        {/* Big soft blobs behind the box (like the reference) */}
        <AbsoluteFill
          style={{
            opacity: 0.18,
            filter: 'blur(0.2px)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: -180,
              top: 40,
              width: 520,
              height: 360,
              borderRadius: 999,
              background: 'rgba(255,255,255,0.55)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: 380,
              top: -80,
              width: 520,
              height: 360,
              borderRadius: 999,
              background: 'rgba(255,255,255,0.50)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              right: -220,
              top: 60,
              width: 560,
              height: 380,
              borderRadius: 999,
              background: 'rgba(255,255,255,0.52)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: 140,
              bottom: -190,
              width: 620,
              height: 420,
              borderRadius: 999,
              background: 'rgba(255,255,255,0.42)',
            }}
          />
        </AbsoluteFill>

        <AbsoluteFill
          style={{
            background:
              'radial-gradient(800px 520px at 50% 54%, rgba(255, 0, 0, 0.10), rgba(0,0,0,0) 62%)',
            mixBlendMode: 'screen',
            opacity: 0.55,
          }}
        />

        <AbsoluteFill
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: `scale(${zoom})`,
          }}
        >
          <CriticalBox progress01={progress01} seed={seed} nodeLabel={nodeLabel} />
        </AbsoluteFill>

        <AbsoluteFill
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.85) 100%)',
          }}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

