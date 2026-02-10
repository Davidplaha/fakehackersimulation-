import {Composition, Folder} from 'remotion';
import {CriticalDownload, type CriticalDownloadProps} from './CriticalDownload';
import {TraceSim, type TraceSimProps} from './TraceSim';

export const RemotionRoot: React.FC = () => {
  return (
    <Folder name="SimDeck">
      <Composition<CriticalDownloadProps>
        id="CriticalDownload"
        component={CriticalDownload}
        durationInFrames={10 * 30}
        fps={30}
        width={1280}
        height={720}
        defaultProps={{
          seed: 1337,
          nodeLabel: 'EU-WEST',
        }}
      />
      <Composition<TraceSimProps>
        id="TraceSim"
        component={TraceSim}
        durationInFrames={8 * 30}
        fps={30}
        width={1280}
        height={720}
        defaultProps={{
          targetLabel: 'DEMO TARGET',
          targetId: 'SIM-7F2A',
          seed: 1337,
        }}
      />
    </Folder>
  );
};
