.PHONY: all
all: symlinks

.PHONY: symlinks
symlinks:
	cd node_modules && rm eslint-plugin-nop && ln -s .. eslint-plugin-nop

.PHONY: eslint
eslint:
	./node_modules/.bin/eslint lib

