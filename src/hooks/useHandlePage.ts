import { useNavigate } from "react-router-dom";

const useHandlePage = () => {
  const navigate = useNavigate();

  const handlePage = (id: number) => {
    navigate(`/movie/${id}`);
  };

  return handlePage;
};

export default useHandlePage;
