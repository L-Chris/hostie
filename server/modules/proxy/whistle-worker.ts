import { EventEmitter } from 'events'
const startWhistle = require('whistle')

let WORKER_ID = 0

class WhistleWorker extends EventEmitter {
  public id: number
  private ready: boolean
  private stopped: boolean
  
  constructor() {
    super()

    this.id = WORKER_ID++
    this.ready = false
    this.stopped = false
  }

  messageListener() {}
  stop() {}
}

const whistleWorker = new WhistleWorker()

process.on('message', whistleWorker.messageListener.bind(whistleWorker))

export default WhistleWorker
export {
  whistleWorker
}