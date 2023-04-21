const sonarqubeScanner = require("sonarqube-scanner");
sonarqubeScanner(
{
serverUrl: "https://sonarqube.swiveltech.lk/",
options: {
"sonar.sources": "src",
"sonar.language": "ts",
"sonar.projectVersion": "1.0.0",
"sonar.javascript.lcov.reportPaths": "test/coverage/lcov.info",
"sonar.sourceEncoding": "UTF-8",
"sonar.test.exclusions": "node_modules/**/*, **.ts$, **/src/pages/_app.tsx",
},
},
() => {}
);