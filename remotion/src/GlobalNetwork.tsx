import React, {useMemo} from 'react';
import {
  AbsoluteFill,
  interpolate,
  random,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

export type GlobalNetworkProps = {
  seed: number;
};

const mono =
  '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';
const grotesk =
  '"Space Grotesk", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Arial, sans-serif';

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

type City = {
  name: string;
  x: number; // 0..1
  y: number; // 0..1
  ip: string;
  coord: string;
};

const cities: City[] = [
  {name: 'New York', x: 0.26, y: 0.43, ip: '192.168.42.17', coord: '40.7128 N, 74.0060 W'},
  {name: 'London', x: 0.47, y: 0.34, ip: '10.0.88.201', coord: '51.5074 N, 0.1278 W'},
  {name: 'Berlin', x: 0.53, y: 0.33, ip: '172.16.55.33', coord: '52.5200 N, 13.4050 E'},
  {name: 'Dubai', x: 0.62, y: 0.50, ip: '172.20.14.88', coord: '25.2048 N, 55.2708 E'},
  {name: 'Tokyo', x: 0.80, y: 0.43, ip: '10.42.99.104', coord: '35.6762 N, 139.6503 E'},
  {name: 'Singapore', x: 0.74, y: 0.60, ip: '192.168.200.5', coord: '1.3521 N, 103.8198 E'},
  {name: 'Sydney', x: 0.84, y: 0.78, ip: '192.168.7.42', coord: '33.8688 S, 151.2093 E'},
  {name: 'Sao Paulo', x: 0.33, y: 0.76, ip: '10.99.12.67', coord: '23.5505 S, 46.6333 W'},
];

const WorldMapSilhouette: React.FC = () => {
  // Original, stylized silhouettes (not traced from any third-party map asset).
  return (
    <svg viewBox="0 0 1200 600" style={{width: '100%', height: '100%', display: 'block'}}>
      <rect width="1200" height="600" fill="black" />
      <g fill="white" opacity={0.9}>
        <path d="M250 95c25-22 70-20 95 6 15 15 10 36-8 52-30 26-83 24-108-3-17-19-10-39 21-55z" />
        <path d="M135 165c42-52 123-78 203-68 44 6 76 24 94 52 14 23 10 44-8 64-18 19-42 30-63 35-18 4-26 13-33 24-12 20-34 33-63 39-30 6-59 3-86-9-26-11-44-29-52-53-8-25-2-52 8-84z" />
        <path d="M360 270c18-10 38-8 48 6 8 12 1 26-12 35-18 12-35 10-44-1-10-12-7-30 8-40z" />
        <path d="M392 312c26-15 58-13 77 7 14 15 14 38 1 64-13 26-22 55-24 83-1 23-7 43-18 58-13 18-30 22-48 13-19-10-31-28-34-52-4-27 1-61 12-97 11-35 18-60 34-76z" />
        <path d="M560 180c30-28 78-38 120-26 26 7 45 23 52 44 7 22-2 41-22 56-29 21-68 26-106 16-28-8-48-24-55-45-7-21-2-33 11-45z" />
        <path d="M600 258c26-24 66-28 97-12 25 13 40 37 42 68 2 31-9 68-27 101-15 28-18 55-20 81-2 24-14 40-34 47-22 7-44-1-61-22-20-26-30-61-30-100 0-47 12-91 33-125z" />
        <path d="M712 268c18-14 46-16 68-3 16 10 21 27 12 45-10 20-32 33-56 34-22 2-39-8-45-25-6-18 3-38 21-51z" />
        <path d="M675 160c56-52 162-76 270-62 80 10 145 40 167 84 16 31 7 57-22 78-31 22-78 33-126 33-39 1-68 10-94 25-35 20-79 30-129 28-65-3-115-25-141-60-29-40-23-85 75-126z" />
        <path d="M900 350c22-14 56-12 74 5 12 12 10 27-3 41-17 18-45 24-70 16-21-7-30-25-22-41 4-9 10-16 21-21z" />
        <path d="M930 430c34-30 86-36 127-13 26 15 35 41 23 66-15 31-56 54-97 54-37 0-69-16-81-41-11-22-3-44 28-66z" />
      </g>
    </svg>
  );
};

const Grid: React.FC<{seed: number}> = ({seed}) => {
  const {width, height, fps} = useVideoConfig();
  const frame = useCurrentFrame();

  const drift = interpolate(frame, [0, 12 * fps], [0, 28], {extrapolateRight: 'clamp'});
  const flicker = 0.92 + random(seed + Math.floor(frame / 4)) * 0.08;

  const lines = useMemo(() => {
    const out: React.ReactNode[] = [];
    const step = 46;
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
    <AbsoluteFill style={{opacity: 0.30 * flicker}}>
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
            'radial-gradient(900px 520px at 50% 48%, rgba(255,255,255,0.06), rgba(0,0,0,0) 60%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'repeating-linear-gradient(180deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, rgba(0,0,0,0) 6px, rgba(0,0,0,0) 10px)',
          opacity: 0.22,
          mixBlendMode: 'overlay',
        }}
      />
    </AbsoluteFill>
  );
};

const DataStream: React.FC<{seed: number; hackedCount: number}> = ({seed, hackedCount}) => {
  const {fps} = useVideoConfig();
  const frame = useCurrentFrame();

  const maxRows = 12;
  const rows = Math.min(maxRows, Math.max(1, hackedCount * 2 + 2));
  const visible = new Array(rows).fill(true).map((_, i) => {
    const city = cities[Math.min(cities.length - 1, Math.floor(i / 2))];
    const t = Math.floor(frame / 6) + i;
    const a = Math.floor(random(seed + t) * 255);
    const b = Math.floor(random(seed + t + 11) * 255);
    const c = Math.floor(random(seed + t + 23) * 255);
    const ok = i < hackedCount * 2;
    const key = `AK-${Math.floor(random(seed + t + 99) * 9_000_000 + 1_000_000)}`;
    const msg = ok
      ? `ACCESS GRANTED ${city.name.toUpperCase()}  ${city.ip}  KEY:${key}`
      : `HANDSHAKE ${a}.${b}.${c}.${Math.floor(random(seed + t + 2) * 255)}  WAIT`;
    return {msg, ok};
  });

  return (
    <div
      style={{
        width: 360,
        borderRadius: 16,
        border: '1px solid rgba(255,255,255,0.10)',
        background: 'rgba(0,0,0,0.38)',
        boxShadow: '0 20px 80px rgba(0,0,0,0.55)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          padding: '12px 14px',
          borderBottom: '1px solid rgba(255,255,255,0.10)',
          fontFamily: mono,
          fontSize: 11,
          letterSpacing: 3,
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.78)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span>Access Log</span>
        <span style={{color: 'rgba(255,90,90,0.9)'}}>LIVE</span>
      </div>
      <div
        style={{
          padding: 12,
          fontFamily: mono,
          fontSize: 11,
          lineHeight: 1.35,
          color: 'rgba(255,255,255,0.78)',
        }}
      >
        {visible.map((r, i) => (
          <div
            key={i}
            style={{
              opacity: interpolate(i, [0, maxRows - 1], [1, 0.55]),
              color: r.ok ? 'rgba(255,255,255,0.86)' : 'rgba(255,255,255,0.62)',
            }}
          >
            <span style={{color: r.ok ? 'rgba(255,90,90,0.95)' : 'rgba(255,255,255,0.55)'}}>
              {r.ok ? '[OK]' : '[..]'}
            </span>{' '}
            {r.msg}
          </div>
        ))}
        <div style={{marginTop: 8, color: 'rgba(255,255,255,0.55)'}}>
          encryption: aes-256 | tunnel: stable | sim: on
        </div>
      </div>
    </div>
  );
};

const NetworkMap: React.FC<{seed: number; progress01: number}> = ({seed, progress01}) => {
  const {width, height, fps} = useVideoConfig();
  const frame = useCurrentFrame();

  const hackedCount = Math.min(cities.length, Math.floor(progress01 * (cities.length + 0.2)));
  const glowPulse = 0.55 + 0.45 * Math.sin((frame / fps) * Math.PI * 2 * 0.7);

  const mapW = Math.round(width * 0.78);
  const mapH = Math.round(height * 0.82);

  const paddingX = Math.round(width * 0.06);
  const paddingY = Math.round(height * 0.08);

  const coords = (c: City) => ({
    x: paddingX + c.x * mapW,
    y: paddingY + c.y * mapH,
  });

  const linePaths = useMemo(() => {
    const paths: Array<{d: string; len: number; idx: number}> = [];
    for (let i = 1; i < cities.length; i++) {
      const a = coords(cities[i - 1]);
      const b = coords(cities[i]);
      // Curved path (cinematic arc).
      const mx = (a.x + b.x) / 2;
      const my = (a.y + b.y) / 2;
      const bend = -Math.abs(b.x - a.x) * 0.12 - 40;
      const c1x = mx;
      const c1y = my + bend;
      const d = `M ${a.x} ${a.y} Q ${c1x} ${c1y} ${b.x} ${b.y}`;
      // Approx length estimate
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const len = Math.sqrt(dx * dx + dy * dy) * 1.25;
      paths.push({d, len, idx: i});
    }
    return paths;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, height]);

  return (
    <AbsoluteFill>
      <AbsoluteFill
        style={{
          filter: 'grayscale(1) contrast(1.15) brightness(0.70)',
          opacity: 0.92,
        }}
      >
        <WorldMapSilhouette />
      </AbsoluteFill>

      <Grid seed={seed} />

      {/* City labels */}
      {cities.map((c, i) => {
        const p = coords(c);
        const on = i < hackedCount;
        const a = interpolate(progress01, [0, 1], [0.25, 1]);
        const fadeIn = interpolate(frame, [i * 12, i * 12 + 18], [0, 1], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
        });
        const alpha = on ? 0.95 : 0.45;
        return (
          <div
            key={c.name}
            style={{
              position: 'absolute',
              left: p.x,
              top: p.y,
              transform: 'translate(-50%, -110%)',
              fontFamily: mono,
              fontSize: 12,
              letterSpacing: 2,
              textTransform: 'uppercase',
              color: on ? 'rgba(255,95,95,0.95)' : 'rgba(255,255,255,0.58)',
              opacity: alpha * fadeIn * a,
              textShadow: on ? '0 0 14px rgba(255,60,60,0.45)' : 'none',
              whiteSpace: 'nowrap',
              pointerEvents: 'none',
            }}
          >
            {c.name}
          </div>
        );
      })}

      {/* Connection lines */}
      <svg width={width} height={height} style={{position: 'absolute', inset: 0}}>
        <defs>
          <filter id="gnGlowRed">
            <feGaussianBlur stdDeviation="2.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {linePaths.map((p) => {
          const idx01 = clamp01((progress01 * (cities.length - 1) - (p.idx - 1)) / 1);
          const strokeDasharray = p.len;
          const strokeDashoffset = (1 - idx01) * p.len;
          const visible = p.idx <= hackedCount;
          return (
            <path
              key={p.idx}
              d={p.d}
              fill="none"
              stroke="rgba(255,70,70,0.85)"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#gnGlowRed)"
              style={{
                opacity: visible ? 0.95 : 0,
                strokeDasharray,
                strokeDashoffset,
              }}
            />
          );
        })}
      </svg>

      {/* Nodes */}
      {cities.map((c, i) => {
        const p = coords(c);
        const on = i < hackedCount;
        const pulse = 0.5 + 0.5 * Math.sin((frame / fps) * Math.PI * 2 * 1.15 + i * 0.7);
        const r = on ? 6 : 4;
        return (
          <div
            key={`node-${c.name}`}
            style={{
              position: 'absolute',
              left: p.x,
              top: p.y,
              width: r * 2,
              height: r * 2,
              transform: 'translate(-50%, -50%)',
              borderRadius: 999,
              background: on ? 'rgba(255,70,70,0.95)' : 'rgba(255,255,255,0.42)',
              boxShadow: on
                ? `0 0 18px rgba(255,60,60,${0.55 + 0.35 * glowPulse}), 0 0 60px rgba(255,60,60,${
                    0.10 + 0.08 * glowPulse
                  })`
                : 'none',
              opacity: on ? 1 : 0.8,
            }}
          >
            {on ? (
              <div
                style={{
                  position: 'absolute',
                  inset: -14,
                  borderRadius: 999,
                  border: '1px solid rgba(255,80,80,0.32)',
                  opacity: 0.20 + 0.25 * pulse,
                }}
              />
            ) : null}
          </div>
        );
      })}

      <AbsoluteFill
        style={{
          background:
            'radial-gradient(900px 620px at 50% 50%, rgba(255,0,0,0.10), rgba(0,0,0,0) 62%)',
          mixBlendMode: 'screen',
          opacity: 0.50,
        }}
      />
      <AbsoluteFill
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 38%, rgba(0,0,0,0.86) 100%)',
        }}
      />
    </AbsoluteFill>
  );
};

const StatusPanel: React.FC<{progress01: number}> = ({progress01}) => {
  const {fps} = useVideoConfig();
  const frame = useCurrentFrame();

  const hackedCount = Math.min(cities.length, Math.floor(progress01 * (cities.length + 0.2)));
  const target = cities[Math.min(cities.length - 1, Math.max(0, hackedCount - 1))];
  const pct = Math.round(progress01 * 100);

  const dots = '.'.repeat((Math.floor(frame / Math.floor(fps / 3)) % 3) + 1);

  return (
    <div
      style={{
        width: 380,
        borderRadius: 16,
        border: '1px solid rgba(255,255,255,0.10)',
        background: 'rgba(0,0,0,0.40)',
        boxShadow: '0 20px 80px rgba(0,0,0,0.55)',
        padding: 14,
      }}
    >
      <div
        style={{
          fontFamily: mono,
          fontSize: 11,
          letterSpacing: 3,
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.78)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span>Acquiring System{dots}</span>
        <span style={{color: 'rgba(255,90,90,0.95)'}}>{pct}%</span>
      </div>

      <div
        style={{
          marginTop: 10,
          fontFamily: grotesk,
          fontWeight: 800,
          fontSize: 18,
          letterSpacing: 0.4,
          color: 'rgba(255,255,255,0.92)',
        }}
      >
        {hackedCount === 0 ? 'Initializing...' : `Target: ${target.name}`}
      </div>
      <div style={{marginTop: 6, fontFamily: mono, fontSize: 12, color: 'rgba(255,255,255,0.70)'}}>
        {hackedCount === 0 ? 'sync: establishing tunnel' : `${target.ip}  |  ${target.coord}`}
      </div>

      <div
        style={{
          marginTop: 12,
          height: 10,
          borderRadius: 999,
          border: '1px solid rgba(255,255,255,0.10)',
          background: 'rgba(255,255,255,0.04)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${pct}%`,
            background: 'linear-gradient(90deg, rgba(255,70,70,0.18), rgba(255,70,70,0.95))',
            boxShadow: '0 0 18px rgba(255,60,60,0.38)',
          }}
        />
      </div>
      <div style={{marginTop: 10, fontFamily: mono, fontSize: 11, color: 'rgba(255,255,255,0.62)'}}>
        nodes: {hackedCount}/{cities.length} | bandwidth: {(hackedCount * 3.7 + 8.2).toFixed(1)} TB/s | latency:{' '}
        {Math.floor(28 + (1 - progress01) * 160)} ms
      </div>
    </div>
  );
};

const DashboardOverlay: React.FC<{seed: number; show: number}> = ({seed, show}) => {
  const {width, height, fps} = useVideoConfig();
  const frame = useCurrentFrame();

  const opacity = interpolate(show, [0, 1], [0, 1], {extrapolateRight: 'clamp'});
  const y = interpolate(show, [0, 1], [24, 0], {extrapolateRight: 'clamp'});

  const items = cities.slice(0, 6).map((c, i) => {
    const k = `AK-${Math.floor(random(seed + i * 7 + Math.floor(frame / 10)) * 9_000_000 + 1_000_000)}`;
    return {c, k};
  });

  return (
    <AbsoluteFill
      style={{
        pointerEvents: 'none',
        opacity,
        transform: `translate3d(0, ${y}px, 0)`,
      }}
    >
      <div
        style={{
          position: 'absolute',
          right: 26,
          bottom: 24,
          width: 520,
          borderRadius: 18,
          border: '1px solid rgba(255,255,255,0.12)',
          background: 'rgba(0,0,0,0.52)',
          boxShadow: '0 28px 120px rgba(0,0,0,0.65)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            padding: '14px 16px',
            borderBottom: '1px solid rgba(255,255,255,0.10)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{fontFamily: mono, fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(255,255,255,0.78)'}}>
            Hacker Dashboard (Simulated)
          </div>
          <div style={{fontFamily: mono, fontSize: 11, color: 'rgba(255,90,90,0.92)', letterSpacing: 2}}>
            ACCESS KEYS
          </div>
        </div>
        <div style={{padding: 14, display: 'grid', gap: 10}}>
          {items.map(({c, k}) => (
            <div
              key={c.name}
              style={{
                display: 'grid',
                gridTemplateColumns: '1.1fr 1.2fr',
                gap: 10,
              }}
            >
              <div
                style={{
                  padding: 10,
                  borderRadius: 14,
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.03)',
                }}
              >
                <div style={{fontFamily: mono, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.62)'}}>
                  City
                </div>
                <div style={{marginTop: 6, fontFamily: grotesk, fontWeight: 800, fontSize: 16, color: 'rgba(255,255,255,0.92)'}}>
                  {c.name}
                </div>
                <div style={{marginTop: 4, fontFamily: mono, fontSize: 11, color: 'rgba(255,255,255,0.72)'}}>
                  {c.coord}
                </div>
              </div>
              <div
                style={{
                  padding: 10,
                  borderRadius: 14,
                  border: '1px solid rgba(255,90,90,0.18)',
                  background: 'rgba(30,0,0,0.22)',
                }}
              >
                <div style={{fontFamily: mono, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.62)'}}>
                  Key (Sim)
                </div>
                <div style={{marginTop: 8, fontFamily: mono, fontSize: 12, color: 'rgba(255,255,255,0.92)', letterSpacing: 1}}>
                  {k}
                </div>
                <div style={{marginTop: 6, fontFamily: mono, fontSize: 11, color: 'rgba(255,255,255,0.66)'}}>
                  status: GRANTED | ttl: 06:{String(59 - (Math.floor(frame / fps) % 50)).padStart(2, '0')}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            padding: '10px 14px 14px',
            fontFamily: mono,
            fontSize: 10,
            letterSpacing: 2,
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.55)',
          }}
        >
          simulation only. no real access.
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
          letterSpacing: 3,
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.55)',
        }}
      >
        simulation / fake
      </div>
    </AbsoluteFill>
  );
};

export const GlobalNetwork: React.FC<GlobalNetworkProps> = ({seed}) => {
  const {fps} = useVideoConfig();
  const frame = useCurrentFrame();

  const intro = spring({
    frame,
    fps,
    config: {damping: 16, mass: 0.9, stiffness: 110},
    durationInFrames: Math.floor(1.1 * fps),
  });
  const fade = interpolate(frame, [0, 10], [0, 1], {extrapolateRight: 'clamp'});

  const progress01 = clamp01(
    interpolate(frame, [Math.floor(0.8 * fps), 11.2 * fps], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }),
  );

  const showDash = clamp01(interpolate(frame, [10.8 * fps, 12.0 * fps], [0, 1], {extrapolateLeft: 'clamp'}));

  const zoom = interpolate(intro, [0, 1], [1.05, 1], {extrapolateRight: 'clamp'});

  return (
    <AbsoluteFill style={{background: '#000', fontFamily: grotesk}}>
      <AbsoluteFill style={{opacity: fade, transform: `scale(${zoom})`}}>
        <NetworkMap seed={seed} progress01={progress01} />

        <div style={{position: 'absolute', left: 26, top: 22, display: 'grid', gap: 12}}>
          <StatusPanel progress01={progress01} />
        </div>

        <div style={{position: 'absolute', right: 26, top: 22}}>
          <DataStream seed={seed} hackedCount={Math.min(cities.length, Math.floor(progress01 * (cities.length + 0.2)))} />
        </div>

        <DashboardOverlay seed={seed} show={showDash} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

