<script>
  import { _ } from "svelte-i18n";
</script>

<!-- 修改 head 資訊 -->
<svelte:head>
  <title>{$_("Agriculture.title")}</title>
</svelte:head>

<section class="container my-3 overflow-hidden">
  <div class="row">
    <section class="col-12 p-2">
      <h2 class="text-center text-lg-start animate__animated animate__fadeIn">
        {$_("Agriculture.reduceRent")}
      </h2>
      <hr class="animate__animated animate__fadeIn" />
      <p class="fs-5 animate__animated animate__fadeIn">
        {$_("Agriculture.firstParagraph")}
      </p>
      <p class="fs-5 animate__animated animate__fadeIn">
        {$_("Agriculture.formulaIntro")}
      </p>
      <p class="text-danger text-center fs-3 animate__animated animate__fadeIn">
        50% x (1-0.25) = 37.5%
      </p>
      <ol
        class="list-group list-group-numbered ms-0 ms-md-4 animate__animated animate__fadeIn"
      >
        <li class="list-group-item border-0">{$_("Agriculture.listOne")}</li>
        <li class="list-group-item border-0">{$_("Agriculture.listTwo")}</li>
        <li class="list-group-item border-0">
          {$_("Agriculture.listThree")}
        </li>
        <li class="list-group-item border-0">{$_("Agriculture.listFour")}</li>
        <li class="list-group-item border-0">{$_("Agriculture.listFive")}</li>
      </ol>
      <h2 class="text-center text-lg-start animate__animated animate__fadeIn">
        {$_("Agriculture.publicLand")}
      </h2>
      <hr class="animate__animated animate__fadeIn" />
      <p class="fs-5 animate__animated animate__fadeIn">
        {$_("Agriculture.publicLandIntro")}
      </p>
      <h2 class="text-center text-lg-start animate__animated animate__fadeIn">
        {$_("Agriculture.farmingPlan")}
      </h2>
      <hr class="animate__animated animate__fadeIn" />
      <p class="fs-5 animate__animated animate__fadeIn">
        {$_("Agriculture.farmingPlanIntro")}
      </p>
    </section>
  </div>
</section>
