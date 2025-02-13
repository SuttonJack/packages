/**
 * @note pseudo-map to conventional-commits
 */

type RewritesProps = {
  branch?: string | null
  from: string
  releaseNotes?: boolean | null
  semver?: 'breaking' | 'feature' | 'fix' | 'major' | 'minor' | 'patch' | null
  to: string
}

/* eslint-disable sort-keys */
const rewrites: RewritesProps[] = [
  { from: 'art', to: 'style' },
  { from: 'zap', to: 'perf' },
  { from: 'fire', to: 'prune' },
  { from: 'bug', to: 'fix', branch: 'fix' },
  { from: 'ambulance', to: 'hotfix', branch: 'hotfix' },
  { from: 'sparkles', to: 'feat', branch: 'feature' },
  { from: 'memo', to: 'docs' },
  { from: 'rocket', to: 'deploy' },
  { from: 'lipstick', to: 'ui' },
  { from: 'tada', to: 'init', semver: 'patch' },
  { from: 'white-check-mark', to: 'test', branch: 'test' },
  { from: 'lock', to: 'security' },
  { from: 'bookmark', to: 'release', branch: 'release', releaseNotes: false },
  { from: 'rotating-light', to: 'lint' },
  { from: 'construction', to: 'wip', releaseNotes: false },
  { from: 'green-heart', to: 'fix-ci' },
  { from: 'arrow-down', to: 'downgrade' },
  { from: 'arrow-up', to: 'upgrade' },
  { from: 'pushpin', to: 'pushpin' },
  { from: 'construction-worker', to: 'ci', branch: 'ci' },
  { from: 'chart-with-upwards-trend', to: 'analytics' },
  { from: 'recycle', to: 'refactor', branch: 'refactor' },
  { from: 'heavy-plus-sign', to: 'dep-add' },
  { from: 'heavy-minus-sign', to: 'dep-rm' },
  { from: 'wrench', to: 'config' },
  { from: 'hammer', to: 'build' },
  { from: 'globe-with-meridians', to: 'i18n' },
  { from: 'pencil2', to: 'typo', releaseNotes: false },
  { from: 'poop', to: 'poo', releaseNotes: false },
  { from: 'rewind', to: 'revert', releaseNotes: false },
  { from: 'twisted-rightwards-arrows', to: 'merge', releaseNotes: false },
  { from: 'package', to: 'dep-up' },
  { from: 'alien', to: 'compat' },
  { from: 'truck', to: 'mv', releaseNotes: false },
  { from: 'page-facing-up', to: 'license' },
  { from: 'boom', to: 'breaking', semver: 'major' },
  { from: 'bento', to: 'assets' },
  { from: 'wheelchair', to: 'access' },
  { from: 'bulb', to: 'docs-code' },
  { from: 'beers', to: 'beer', releaseNotes: false },
  { from: 'speech-balloon', to: 'texts' },
  { from: 'card-file-box', to: 'db' },
  { from: 'loud-sound', to: 'log-add', releaseNotes: false },
  { from: 'mute', to: 'log-rm', releaseNotes: false },
  { from: 'busts-in-silhouette', to: 'contrib-add' },
  { from: 'children-crossing', to: 'ux' },
  { from: 'building-construction', to: 'arch' },
  { from: 'iphone', to: 'iphone' },
  { from: 'clown-face', to: 'mock' },
  { from: 'egg', to: 'egg', releaseNotes: false },
  { from: 'see-no-evil', to: 'ignore', releaseNotes: false },
  { from: 'camera-flash', to: 'snapshot', releaseNotes: false },
  { from: 'alembic', to: 'experiment', releaseNotes: false },
  { from: 'mag', to: 'seo' },
  { from: 'label', to: 'types' },
  { from: 'seedling', to: 'seed' },
  { from: 'triangular-flag-on-post', to: 'flags' },
  { from: 'goal-net', to: 'catch' },
  { from: 'animation', to: 'animation' },
  { from: 'wastebasket', to: 'clean' },
  { from: 'passport-control', to: 'roles' },
  { from: 'adhesive-bandage', to: 'patch' },
  { from: 'monocle-face', to: 'data' },
  { from: 'coffin', to: 'rip', releaseNotes: false },
  { from: 'test-tube', to: 'test-fail' },
  { from: 'necktie', to: 'logic' },
  { from: 'stethoscope', to: 'healthcheck' },
  { from: 'bricks', to: 'inf' },
  { from: 'technologist', to: 'dx' },
]

export default rewrites
