<script>
  import { _ } from "svelte-i18n";
</script>

<!-- 修改 head 資訊 -->
<svelte:head>
  <title>{$_("Industralization.title")}</title>
</svelte:head>

<section class="container-fluid">
  <div class="row">
    <div class="col-12">
      <section class="p-2">
        <h2 class="text-center text-lg-start">
          {$_("Industralization.heading")}
        </h2>
        <hr />
        <p class="fs-5">{$_("Industralization.rice")}</p>
        <p class="fs-5">{$_("Industralization.accomplishments")}</p>
        <figure class="figure d-flex flex-column align-items-center">
          <img
            src="images/taiwanTextile.jpg"
            alt="女工在工廠內指導工人。"
            class="figure-img img-fluid rounded"
          />
          <figcaption class="figure-caption text-center">
            {$_("Industralization.instructions")}
          </figcaption>
        </figure>
        <div class="row m-0 m-md-4">
          <div class="col-12 col-md-6">
            <p class="p-2 fs-5">{$_("Industralization.protection")}</p>
          </div>
          <div class="col-12 col-md-6">
            <p class="p-2 fs-5">{$_("Industralization.laws")}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</section>
