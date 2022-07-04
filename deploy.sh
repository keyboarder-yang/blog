
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build
git config --global --unset http.proxy
git config --global --unset https.proxy
#git init
#git add -A
#git commit -m '更新-提交'
#git push -f  https://github.com/keyboarder-yang/blog master
# 删除远程分支
git push origin --delete gh-pages
git subtree push --prefix docs/.vitepress/dist origin gh-pages


cd -
