<script>
  import { _ } from "svelte-i18n";

  google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ["Year", "GDP"],
      ["1960", 34394],
      ["1965", 114762],
      ["1970", 231397],
      ["1975", 601778],
      ["1980", 1522459],
      ["1980", 2535056],
      ["1990", 4474288],
      ["1995", 7391062],
      ["2000", 10328549],
      ["2005", 12036675],
      ["2010", 14060345],
    ]);

    var options = {
      title: "台灣過去50年GDP變化圖表",
      curveType: "function",
      legend: { position: "bottom" },
    };

    var chart = new google.visualization.LineChart(
      document.getElementById("curve_chart")
    );

    chart.draw(data, options);
  }
</script>

<!-- 修改 head 資訊 -->
<svelte:head>
  <title>{$_("Home.title")}</title>
</svelte:head>

<section class="container-fluid">
  <div class="row">
    <div class="col-12 col-md-7 col-lg-9">
      <!--這裡是主要部份的左邊內容-->
      <section class="p-2">
        <p class="fs-5">{$_("Home.taiwanIntro")}</p>
        <p class="fs-5">{$_("Home.ROCgovernment")}</p>
        <div class="w-100" id="curve_chart" style="height: 500px" />
      </section>
    </div>

    <div class="col-12 col-md-5 col-lg-3">
      <!--這裡是主要部份的右邊內容-->
      <section class="p-2">
        <h3 class="text-center mb-3">{$_("Home.whereIsTaiwan")}</h3>
        <p class="fs-5 mb-3">{$_("Home.taiwanLocation")}</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747434.728288353!2d117.840608673357!3d23.474736379075086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346ed5cb2b61c3a5%3A0xcf20ddb042be7fa0!2z6Ie654Gj!5e0!3m2!1szh-TW!2stw!4v1659361856358!5m2!1szh-TW!2stw"
          class="w-100 rounded-4"
          frameborder="0"
          loading="lazy"
          aria-hidden="false"
          title="台灣地理位置"
        />
      </section>
    </div>
  </div>
</section>

<style>
  iframe {
    height: 400px;
  }
</style>
