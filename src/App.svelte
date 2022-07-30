<script>
  import { Router, Link, Route } from "svelte-routing";

  import Home from "./lib/Home/Home.svelte";
  import Agriculture from "./lib/Agriculture/Agriculture.svelte";
  import Industralization from "./lib/Industralization/Industralization.svelte";
  import Economy from "./lib/Economy/Economy.svelte";
  import Author from "./lib/Author/Author.svelte";

  export let url = "";
</script>

<header>
  <h1><i class="twicon-main-island" /> 台灣經濟發展歷史</h1>
  <p>過去70年台灣經濟發展的歷史以及相關政策</p>
</header>

<!--這裡是nav bar-->
<Router url="{url}">
  <nav>
    <ul>
      <!-- 修改網址結尾成 / -->
      <ll>
        <Link to="/"><i class="twicon-main-island" />首頁</Link>
      </ll>
      <!-- 修改網址結尾成 /agriculture -->
      <ll>
        <Link to="agriculture"><i class="twicon-lovers-brg" />農業改革</Link>
      </ll>
      <!-- 修改網址結尾成 /industralization -->
      <ll>
        <Link to="industralization"><i class="twicon-taipei-stn" />工業改革</Link>
      </ll>
      <!-- 修改網址結尾成 /economy -->
      <ll>
        <Link to="economy"><i class="twicon-taipei101" />經濟起飛</Link>
      </ll>
      <!-- 修改網址結尾成 /author -->
      <ll>
        <Link to="author"><i class="twicon-black-bear" />關於作者</Link>
      </ll>
    </ul>
  </nav>

  <div>
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
  </div>
</Router>

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

  nav ul li :global(a) {
    text-decoration: none;
    color: #c4c4c4;
    margin: 1rem;
    font-size: 1.25rem;
    transition: all 0.3s ease;
  }

  nav ul li i {
    font-size: 1.75rem;
  }

  nav ul li :global(a):hover {
    color: white;
  }

  nav ul li :global(a):active {
    color: white;
  }
</style>