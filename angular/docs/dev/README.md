# Angular Library

To create a new library project, the following command has to be executed

```
ng new {{folder_name}} --create-application=false
cd {{folder_name}}
```

To add a new library, the following command has to be executed

```
ng g lib {{lib_name}} -p {{prefix}}
```

To implement the library, the following commands are useful

```
ng build {{lib_name}}
ng test {{lib_name}}
ng lint {{lib_name}}
npm run playground

```

To publish the library, the following commands are useful

```
npm whoami
npm adduser
cd dist/{{lib_name}}
npm publish --access public
```

## Installing package from a local folder

IMPORTANT: If project uses this library from the local folder, `angular.json`
has to contain `"preserveSymlinks": true,` under `architect -> build ->
options`. If that's not the case, Angular directives in the library components
like `ngIf`, `ngFor` won't work.

## Resources

* [Angular in Depth](https://blog.angularindepth.com)
* [Publish an Angular Library](https://medium.com/@esanjiv/complete-beginner-guide-to-publish-an-angular-library-to-npm-d42343801660)
