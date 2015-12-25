# cloudfleet.io

The AngularJS rewrite of the cloudfleet.io web content.

## Build & development

Assuming that `npm` has been installed.

And that both Bower and Grunt have been installed via
```
npm install -g bower grunt
```

Furthermode, that Compass has been installed via
```
gem install compass
```

Then one may run the following to pop up a browser on a localhost server
listening on port 9000:

```
npm install && bower install && grunt serve
```

### Error in running bower

Running bower may result in the following error

```
    ? May bower anonymously report usage statistics to improve the tool over time? (Y/n) [?25h

    /opt/local/lib/node_modules/bower/node_modules/inquirer/node_modules/rx-lite/rx.lite.js:75
        throw e;
        ^

    SyntaxError: Invalid regular expression: /.{1,0}/: numbers out of order in {} quantifier.
        at new RegExp (native)
        at breakLines (/opt/local/lib/node_modules/bower/node_modules/inquirer/lib/utils/screen-manager.js:108:15)
        at ScreenManager.render (/opt/local/lib/node_modules/bower/node_modules/inquirer/lib/utils/screen-manager.js:55:
```

As suggested in <http://stackoverflow.com/questions/22387857/stop-bower-from-asking-for-statistics-when-installing> one may get past this error by using the following invocation of ```bower```:

```
bower --config.analytics=false install
```

## Testing

Running `grunt test` will run the unit tests with karma.

## Deployment

To deploy, run:
```
grunt deploy
```
This builds the optimized, minified files in the *dist/* folder, commits it on
the production branch and git pushes it. The next step after that is to run
our ansible playbooks to actually deploy the code to the website server:
```
ansible-playbook spire.yml --tags=landing-page
```
