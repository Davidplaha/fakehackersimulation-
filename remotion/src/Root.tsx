import {Composition, Folder} from 'remotion';
import {TraceSim, type TraceSimProps} from './TraceSim';

export const RemotionRoot: React.FC = () => {
  return (
    <Folder name="SimDeck">
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

