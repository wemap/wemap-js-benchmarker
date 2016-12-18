<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta
      content="ie=edge"
      http-equiv="x-ua-compatible" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
    <title>Wemap Benchmarker Runner</title>
  </head>
  <!-- styles -->
  <link rel="stylesheet" type="text/css" href="css/main.css" />
  <!-- scripts -->
  <script type="text/javascript" src="browser-runner-bundle.js"></script>
  <body>
    <!-- start of main -->
    <div id="header" class="flexible-row">
      <h1 class="title col-left">
        <span>Wemap Benchmarker</span>
      </h1>
      <div class="searchbox col-right">
        <input type="text"
          placeholder="Search for a suite..."/>
      </div>
    </div>
    <div class="flexible-row">
      <div id="suites" class="col-left">
        <ul>
          <li class="item" data-suitename="create-dom-element">
            <span class="title">Create DOM Element</span>
            <button class="single-run">
              <span>run</span>
            </button>
          </li>
          <li class="item" data-suitename="string-indexof_vs_regextest">
            <span class="title">String.indexof vs Regex.test</span>
            <button class="single-run">
              <span>run</span>
            </button>
          </li>
        </ul>
      </div>
      <div id="console" class="col-right"></div>
    </div>
    <!-- script -->
    <script type="text/javascript">
      // <![CDATA[
      window.run = require('browser-runner-bundle');
      // ]]>
    </script>
    <script type="text/javascript" src="js/main.js"></script>
  </body>
</html>
