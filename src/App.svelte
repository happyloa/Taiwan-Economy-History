<script>
  import { Router, Link, Route } from "svelte-routing";
  import { locale, _ } from 'svelte-i18n'

  const handleLocaleChange = e => {
  e.preventDefault();
  locale.set(e.target.value);
  };

  // 引入 Home 元件
  import Home from "./lib/Home/Home.svelte";
  // 引入 Agriculture 元件
  import Agriculture from "./lib/Agriculture/Agriculture.svelte";
  // 引入 Industralization 元件
  import Industralization from "./lib/Industralization/Industralization.svelte";
  // 引入 Economy 元件
  import Economy from "./lib/Economy/Economy.svelte";
  // 引入 Author 元件
  import Author from "./lib/Author/Author.svelte";

  // 引入 beforeHeader 元件
  import BeforeHeader from "./lib/beforeHeader/beforeHeader.svelte";
  // 引入 Footer 元件
  import Footer from "./lib/Footer/Footer.svelte";

  export let url = "";
</script>

<!-- 這裡是 BeforeHeader -->
<BeforeHeader/>

<Router url="{url}">
  <!--這裡是nav bar-->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top overflow-hidden">
    <div class="container-fluid">
      <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#economyNav" aria-controls="economyNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="economyNav">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <!-- 修改網址結尾成 / -->
          <ll class="nav-item animate__animated animate__bounceInLeft animate__faster">
            <Link class="nav-link m-1 fs-5 text-center text-lg-start" to="/"><i class="twicon-roc-flag fs-4" />{$_("navBar.Home")}</Link>
          </ll>
          <!-- 修改網址結尾成 /Agriculture -->
          <ll class="nav-item animate__animated animate__bounceInLeft animate__faster">
            <Link class="nav-link m-1 fs-5 text-center text-lg-start" to="Agriculture"><i class="twicon-flying-fish fs-4" />{$_("navBar.Agriculture")}</Link>
          </ll>
          <!-- 修改網址結尾成 /Industralization -->
          <ll class="nav-item animate__animated animate__bounceInLeft animate__fast">
            <Link class="nav-link m-1 fs-5 text-center text-lg-start" to="Industralization"><i class="twicon-youbike fs-4" />{$_("navBar.Industralization")}</Link>
          </ll>
          <!-- 修改網址結尾成 /Economy -->
          <ll class="nav-item animate__animated animate__bounceInLeft animate__slow">
            <Link class="nav-link m-1 fs-5 text-center text-lg-start" to="Economy"><i class="twicon-taipei101 fs-4" />{$_("navBar.Economy")}</Link>
          </ll>
          <!-- 修改網址結尾成 /Author -->
          <ll class="nav-item animate__animated animate__bounceInLeft animate__slower">
            <Link class="nav-link m-1 fs-5 text-center text-lg-start" to="Author"><i class="twicon-black-bear fs-4" />{$_("navBar.Author")}</Link>
          </ll>
        </ul>
        <select on:change={handleLocaleChange} class="form-select w-25 d-block mx-auto animate__animated animate__bounceInRight">
            <option value="zhTW">繁體中文</option>
            <option value="en">English</option>
        </select>
      </div>
    </div>
  </nav>

  <main>
    <!-- 將頁面其餘的部分修改成 Home 元件 -->
    <Route path="/"><Home /></Route>
    <!-- 將頁面其餘的部分修改成 Agriculture 元件 -->
    <Route path="Agriculture"><Agriculture /></Route>
    <!-- 將頁面其餘的部分修改成 Industralization 元件 -->
    <Route path="Industralization"><Industralization /></Route>
    <!-- 將頁面其餘的部分修改成 Economy 元件 -->
    <Route path="Economy"><Economy /></Route>
    <!-- 將頁面其餘的部分修改成 Author 元件 -->
    <Route path="Author"><Author /></Route>
  </main>
</Router>

<!-- 這裡是 Footer -->
<Footer/>