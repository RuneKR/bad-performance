Demonstration of good and bad performance with storybook due to node_modules not being ignored in require.context.

Good performance:

- npm run storybook

Bad performance
- npm run symlink
- npm run build
- npm run storybook

The symlinks are needed for the build step to work. The build step is needed when packages are depending on each other and changes has been made on each packages. Since changes can happen continusly it does not make sense to just restart storybook all the time.

A solution is to move all stories outside of the packages into a seperate folder.
