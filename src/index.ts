import { load, Agent, LoadOptions, GetOptions, GetResult, hashComponents, componentsToDebugString } from './agent'
import { BuiltinComponents } from './sources'
import { Confidence } from './confidence'
import { Component, UnknownComponents } from './utils/entropy_source'
import { x64hash128 } from './utils/hashing'

// Exports that are under Semantic versioning
export {
  load,
  Agent,
  LoadOptions,
  GetOptions,
  GetResult,
  hashComponents,
  componentsToDebugString,
  Component,
  UnknownComponents,
  BuiltinComponents,
  Confidence,
}
// The default export is a syntax sugar (`import * as FP from '...' → import FP from '...'`).
// It should contain all the public exported values.
export default { load, hashComponents, componentsToDebugString }

// The exports below are for private usage. They may change unexpectedly. Use them at your own risk.
/** Not documented, out of Semantic Versioning, usage is at your own risk */
export const murmurX64Hash128 = x64hash128
export { prepareForSources } from './agent'
export { getProConfidenceScore } from './confidence'
export { sources } from './sources'
export { getScreenFrame } from './sources/screen_frame'
export {
  getFullscreenElement,
  isAndroid,
  isTrident,
  isEdgeHTML,
  isChromium,
  isWebKit,
  isGecko,
  isDesktopSafari,
} from './utils/browser'
export { loadSources, SourcesToComponents } from './utils/entropy_source'
