Development is done on origin/develop branch

Run `yarn build` on develop
`git subtree --prefix build origin build`
`git checkout build`
`git merge -s ours master && git checkout master && git merge build`
`git push master`
