import * as childProcess from 'child_process'
import WhistleWorker, { whistleWorker } from './whistle-worker'

class Whistle {
  public workers: Map<string, WhistleWorker>;

  constructor() {
    this.workers = new Map()
  }

  async fork(forkModule: string, options: any) {
    const worker = new WhistleWorker()
    
    this.workers.set(worker.id, worker)
  }
}

module.exports = Whistle