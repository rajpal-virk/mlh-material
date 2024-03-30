.PHONY: all clean

git-push:
	@echo "Running git commands"
	git add .
	git commit -m "Updates $(shell date +'%Y-%m-%d %H:%M:%S')"
	git push origin main
	echo "Git push completed!"
	
