
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build
git init
git add -A
git commit -m '版本更新'
git config --global --unset http.proxy
git config --global --unset https.proxy
# 删除远程分支
git push origin --delete gh-pages
git subtree push --prefix docs/.vitepress/dist origin gh-pages


cd -
