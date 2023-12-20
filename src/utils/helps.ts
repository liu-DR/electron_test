import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

// 跳转路由
export const gotoPath = (path: string) => {
    navigate(path)
}