<script>
  import { _ } from "svelte-i18n";
</script>

<!-- 修改 head 資訊 -->
<svelte:head>
  <title>{$_("Economy.title")}</title>
</svelte:head>

<section class="container my-3 overflow-hidden">
  <div class="row">
    <section class="col-12">
      <h2 class="text-center text-lg-start animate__animated animate__fadeIn">
        {$_("Economy.nowaday")}
      </h2>
      <hr class="animate__animated animate__fadeIn" />
      <img
        src="images/Group1.svg"
        alt="時代演進圖"
        class="img-fluid w-100 animate__animated animate__bounceInDown"
      />
      <p class="fs-5 mb-4 animate__animated animate__fadeIn">
        {$_("Economy.introduction")}
      </p>
      <h3 class="text-center text-lg-start animate__animated animate__fadeIn">
        {$_("Economy.additional")}
      </h3>
      <ul class="list-group animate__animated animate__fadeIn">
        <li class="list-group-item">
          <a href="https://ic.tpex.org.tw/introduce.php?ic=D000" class="fs-5"
            >{$_("Economy.semiconductor")}</a
          >
        </li>
        <li class="list-group-item">
          <a
            href="https://www.bnext.com.tw/article/58060/semiconductor-industry"
            class="fs-5">{$_("Economy.semiconductorFuture")}</a
          >
        </li>
      </ul>
    </section>
  </div>
</section>

<style>
  ul li a {
    color: #3e567c;
    text-decoration: none;
  }
  ul li a:hover,
  :visited {
    color: #24344d;
  }
</style>
