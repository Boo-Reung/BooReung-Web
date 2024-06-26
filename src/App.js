import { Route, Routes } from "react-router-dom";

// pages
import Landing from "./pages/landing/";
import Loading from "./pages/landing/loading";
import List from "./pages/main/list";
import Detail from "./pages/main/detail";
import Hosting from "./pages/hosting/hosting";
import After from "./pages/after";

function App() {
    return (
        <div>
            <Routes>
                {/* 랜딩 페이지 */}
                <Route index element={<Landing />} />

                {/* 로딩 페이지 */}
                <Route path="/loading" element={<Loading />} />

                {/* 목록 페이지 */}
                <Route path="/list" element={<List />} />

                {/* 세부정보 페이지 (목록에서 클릭 시) */}
                <Route path="/detail/:id" element={<Detail />} />

                {/* 호스팅 페이지 */}
                <Route path="/hosting" element={<Hosting />} />

                {/* 성사된 카풀 정보 입력 페이지 */}
                <Route path="/after" element={<After />} />
            </Routes>
        </div>
    );
}

export default App;
