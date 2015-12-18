# cloudfleet.io

The AngularJS rewrite of the cloudfleet.io web content.

## Build & development

Assuming that `npm` has been installed.

And that Bower has been installed via
```
npm install -g bower
```

Furthermode, that Compass has been installed via
```
gem install compass
```

Then one may run
```
npm install
bower install
```

And finally `grunt` for building and `grunt serve` for preview.

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
