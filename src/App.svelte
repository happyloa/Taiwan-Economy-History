<script>
  import { Router, Link, Route } from "svelte-routing";

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

  // 引入 Footer 元件
  import Footer from "./lib/Footer/Footer.svelte";

  export let url = "";
</script>

<header>
  <h1><i class="twicon-main-island" /> 台灣經濟發展歷史</h1>
  <p>過去70年台灣經濟發展的歷史以及相關政策</p>
</header>

<Router url="{url}">
  <!--這裡是nav bar-->
  <nav>
    <ul>
      <!-- 修改網址結尾成 / -->
      <ll>
        <Link to="/"><i class="twicon-roc-flag" />首頁</Link>
      </ll>
      <!-- 修改網址結尾成 /Agriculture -->
      <ll>
        <Link to="Agriculture"><i class="twicon-flying-fish" />農業改革</Link>
      </ll>
      <!-- 修改網址結尾成 /Industralization -->
      <ll>
        <Link to="Industralization"><i class="twicon-youbike" />工業改革</Link>
      </ll>
      <!-- 修改網址結尾成 /Economy -->
      <ll>
        <Link to="Economy"><i class="twicon-taipei101" />經濟起飛</Link>
      </ll>
      <!-- 修改網址結尾成 /Author -->
      <ll>
        <Link to="Author"><i class="twicon-black-bear" />關於作者</Link>
      </ll>
    </ul>
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

<style>
  header {
    background-color: #c4c4c4;
    padding: 1rem;
  }
  header h1 {
    font-size: 2.5rem;
  }
  header h1 i {
    font-size: 3rem;
  }

  nav {
    background-color: #312f2f;
    padding: 1rem;
  }
  nav ul {
    display: flex;
    list-style-type: none;
  }
  nav ul :global(a) {
    text-decoration: none;
    color: #c4c4c4;
    margin: 1rem;
    font-size: 1.25rem;
    transition: all 0.3s ease;
  }
  nav ul :global(a):hover {
    color: white;
  }
  nav ul :global(a):active {
    color: white;
  }
  nav ul li i {
    font-size: 1.75rem;
  }
</style>