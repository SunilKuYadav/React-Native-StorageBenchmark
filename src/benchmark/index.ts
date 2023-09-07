const getCurrentTime = () => new Date().getTime();
const iterations = 100000;

const benchmark = async (
  label: string,
  fn: () => unknown | Promise<unknown>,
): Promise<number> => {
  try {
    console.log(`Starting Benchmark "${label}"...`);

    const start = getCurrentTime();
    for (let i = 0; i < iterations; i++) {
      const r = fn();
      if (r instanceof Promise) {
        await r;
      }
    }
    const end = getCurrentTime();

    const diff = end - start;
    console.log(`Finished Benchmark "${label}"! Took ${diff.toFixed(4)}ms!`);
    return diff;
  } catch (e) {
    console.error(`Failed Benchmark "${label}"!`, e);
    return 0;
  }
};

export default benchmark;
export {getCurrentTime, iterations};
