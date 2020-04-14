# Basic demo of shrun

This is a basic example of a [shrun](https://www.npmjs.com/package/shrun) setup. It provides a bare-bones command line tool `testshrun`, and a set of corresponding shrun specs which test that tool.

## Setup

> Note: for many users `sudo` will be necessary to run shrun commands as it relies on Docker which tends to be installed as root.

**clone**

```bash
git clone git@github.com:rylandg/shrun-basic-demo.git
cd shrun-basic-demo
```

**install dependency (shrun)**

```bash
npm install
#or
yarn install
```

**build demo docker image**

```bash
npm run build
```

*or with sudo*

```bash
sudo npm run build
```

This will create a docker image that contains the basic `testshrun` command line tool.

If you're interested in using alpine instead of ubuntu, run:

```bash
sudo npm run build-alpine
```

**run shrun**

```bash
npm run spec
```

*or with sudo*

```bash
sudo -E npm run spec
```

## What's included in this repo?

1. A very minimal command line tool (named `testshrun`). This tool makes it possible to write custom `shrun` test specs.

2. Two package.json commands (`build` && `spec`) which simplify the process of building the default shrun image, and running tests.

3. A `specs/demo.yml` spec test file which showcases the basic functionality of shrun.

If you're interested in looking at the default shrun docker files, [they are available here](https://github.com/rylandg/shrun/blob/master/docker_files). Feel free to copy it locally and modify it to fit your needs.

### More about shrun

* [shrun on github](https://github.com/rylandg/shrun)
* [shrun on npm](https://www.npmjs.com/package/shrun)
