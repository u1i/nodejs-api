echo $RANDOM > test.txt
git add -A
git commit -m "changed $(date)"
git push
