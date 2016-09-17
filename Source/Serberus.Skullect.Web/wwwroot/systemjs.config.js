/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    // map tells the System loader where to look for things
    var map = {
        'app': "appScripts", // 'dist',
        '@angular': "libs/@angular",
        'angular2-in-memory-web-api': "libs/angular2-in-memory-web-api",
        'rxjs': "libs/rxjs"
    };

    var Materialmap = {
        '@angular2-material': "libs/@angular2-material"
    };


    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': { main: "main.js", defaultExtension: "js" },
        'rxjs': { defaultExtension: "js" },
        'angular2-in-memory-web-api': { main: "index.js", defaultExtension: "js" },
    };
    // packages tells the System loader how to load when no filename and/or no extension
    var materialpackages = {
        '@angular2-material/core': {
            format: "cjs",
            defaultExtension: "js",
            main: "core.umd.js"
        },
        '@angular2-material/sidenav': {
            format: "cjs",
            defaultExtension: "js",
            main: "sidenav.umd.js"
        },
        '@angular2-material/toolbar': {
            format: "cjs",
            defaultExtension: "js",
            main: "toolbar.umd.js"
        },
        '@angular2-material/card': {
            format: "cjs",
            defaultExtension: "js",
            main: "card.umd.js"
        },
        '@angular2-material/button': {
            format: "cjs",
            defaultExtension: "js",
            main: "button.umd.js"
        },
        '@angular2-material/checkbox': {
            format: "cjs",
            defaultExtension: "js",
            main: "checkbox.umd.js"
        },
        '@angular2-material/radio': {
            format: "cjs",
            defaultExtension: "js",
            main: "radio.umd.js"
        },
        '@angular2-material/progress-circle': {
            format: "cjs",
            defaultExtension: "js",
            main: "progress-circle.umd.js"
        },
        '@angular2-material/progress-bar': {
            format: "cjs",
            defaultExtension: "js",
            main: "progress-bar.umd.js"
        },
        '@angular2-material/input': {
            format: "cjs",
            defaultExtension: "js",
            main: "input.umd.js"
        },
        '@angular2-material/list': {
            format: "cjs",
            defaultExtension: "js",
            main: "list.umd.js"
        },
        '@angular2-material/icon': {
            format: "cjs",
            defaultExtension: "js",
            main: "icon.umd.js"
        },
        '@angular2-material/tabs': {
            format: "cjs",
            defaultExtension: "js",
            main: "tabs.umd.js"
        },
    };
    var ngPackageNames = [
      "common",
      "compiler",
      "core",
      "forms",
      "http",
      "platform-browser",
      "platform-browser-dynamic",
      "router",
      "router-deprecated",
      "upgrade"
    ];
    var ngMaterialPackageNames = [
      "core",
      "sidenav",
      "toolbar",
      "card",
      "button",
      "checkbox",
      "radio",
      "progress-circle",
      "progress-bar",
      "input",
      "list",
      "icon",
      "tabs"
    ];
    // Individual files (~300 requests):
    function packIndex(pkgName) {
        packages["@angular/" + pkgName] = { main: "index.js", defaultExtension: "js" };
    }

    function MpackIndex(pkgName) {
        materialpackages["@angular2-material" + pkgName] = { main: pkgName + ".js", defaultExtension: "js" };
    }

    // Bundled (~40 requests):
    function packUmd(pkgName) {
        packages["@angular/" + pkgName] = { main: "/bundles/" + pkgName + ".umd.js", defaultExtension: "js" };
    }

    // Bundled (~40 requests):
    function MpackUmd(pkgName) {
        packages["@angular2-material/" + pkgName] = { main: "/bundles/" + pkgName + ".umd.js", defaultExtension: "js" };
    }

    // Most environments should use UMD; some (Karma) need the individual index files
    var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
    // Add package entries for angular packages
    ngPackageNames.forEach(setPackageConfig);
    var config = {
        map: map,
        packages: packages
    };
    System.config(config);

    // Most environments should use UMD; some (Karma) need the individual index files
    var setMaterialsPackageConfig = System.packageWithIndex ? MpackIndex : MpackUmd;
    // Add package entries for angular packages
    ngMaterialPackageNames.forEach(setMaterialsPackageConfig);
    var Materialconfig = {
        map: Materialmap,
        packages: materialpackages
    };
    System.config(Materialconfig);

})(this);