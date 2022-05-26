import * as Core from '@actions/core'
import {extractURLs} from './fetcher'
import {getEmail, getPassword} from './constants'
import {
  createDeployment,
  findDeploy,
  findServer,
  getContext,
  logIn,
  waitForDeploy
} from './render'

async function run(): Promise<void> {
  try {
    const urls = await extractURLs()
    if (!urls) return Core.setFailed('Render comment not found.')
    const [serviceId, preview] = urls
    Core.info('Starting Render Wait Action')
    await logIn(getEmail, getPassword)
    const context = getContext()
    const serverId = await findServer(context, serviceId || '')
    const render = await findDeploy(context, serverId)
    const github = await createDeployment(context, render)
    await waitForDeploy({render, github})
    Core.setOutput('preview-url', preview)
  } catch (error: any) {
    Core.setFailed(error.message)
  }
}

run()
