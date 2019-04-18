import * as os from 'os'

async function getCpuCount() {
  let cpuCount: any
  try {
    cpuCount = await import('physical-cpu-count')
  } catch(err) {
    cpuCount = os.cpus().length
  }
  return cpuCount || 1
}

export {
  getCpuCount
}
