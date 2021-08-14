/* eslint-disable import/extensions */
import {
  Switch,
  Redirect,
  Route,
  withRouter,
  RouteComponentProps,
} from "react-router-dom";
import React from "react";
import CardContainer from "../card-container/card-container";
import WordsContainer from "../words/words-container";
import Categories from "../categories/categories";
import LoginModal from "../login-modal/login-modal";
import AddCategoriesModal from "../add-categories-modal/add-categories";
import EditCategoriesModal from "../edit-category/edit-modal";
import Header from "../header/header";
import AdminHeader from "../header/admin-header";

interface RoutingPrps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  isPlay: boolean;
  setIsPlay: React.Dispatch<React.SetStateAction<boolean>>;
  gameMode: string;
  setGameMode: React.Dispatch<React.SetStateAction<string>>;
  currentCategory: number;
  setCurrentCategory: React.Dispatch<React.SetStateAction<number>>;
  currentCategoryName: string;
  setCurrentCategoryName: React.Dispatch<React.SetStateAction<string>>;
}
class Routing extends React.Component<RoutingPrps & RouteComponentProps> {
  render() {
    const {
      isPlay,
      setIsPlay,
      currentPage,
      gameMode,
      setGameMode,
      setCurrentPage,
      setCurrentCategory,
      currentCategory,
      currentCategoryName,
      setCurrentCategoryName,
    } = this.props;
    return (
      <div className="container">
        <Switch>
          <Route path="/Home">
            <Header
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              isPlay={isPlay}
              setIsPlay={setIsPlay}
              gameMode={gameMode}
              setGameMode={setGameMode}
            />
            <CardContainer
              categoryNumber={0}
              isPlay={isPlay}
              setIsPlay={setIsPlay}
              gameMode={gameMode}
              setGameMode={setGameMode}
              setCurrentPage={setCurrentPage}
            />
          </Route>
          <Route path="/Action_A">
            <Header
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              isPlay={isPlay}
              setIsPlay={setIsPlay}
              gameMode={gameMode}
              setGameMode={setGameMode}
            />
            <CardContainer
              categoryNumber={1}
              isPlay={isPlay}
              setIsPlay={setIsPlay}
              gameMode={gameMode}
              setGameMode={setGameMode}
              setCurrentPage={setCurrentPage}
            />
          </Route>
          <Route path="/Action_B">
            <Header
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              isPlay={isPlay}
              setIsPlay={setIsPlay}
              gameMode={gameMode}
              setGameMode={setGameMode}
            />
            <CardContainer
              categoryNumber={2}
              isPlay={isPlay}
              setIsPlay={setIsPlay}
              gameMode={gameMode}
              setGameMode={setGameMode}
              setCurrentPage={setCurrentPage}
            />
          </Route>
          <Route path="/Animal_A">
            <Header
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              isPlay={isPlay}
              setIsPlay={setIsPlay}
              gameMode={gameMode}
              setGameMode={setGameMode}
            />
            <CardContainer
              categoryNumber={3}
              isPlay={isPlay}
              setIsPlay={setIsPlay}
              gameMode={gameMode}
              setGameMode={setGameMode}
              setCurrentPage={setCurrentPage}
            />
          </Route>
          <Route path="/Animal_B">
            <Header
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              isPlay={isPlay}
              setIsPlay={setIsPlay}
              gameMode={gameMode}
              setGameMode={setGameMode}
            />
            <CardContainer
              categoryNumber={4}
              isPlay={isPlay}
              setIsPlay={setIsPlay}
              gameMode={gameMode}
              setGameMode={setGameMode}
              setCurrentPage={setCurrentPage}
            />
          </Route>
          <Route path="/Clothes">
            <Header
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              isPlay={isPlay}
              setIsPlay={setIsPlay}
              gameMode={gameMode}
              setGameMode={setGameMode}
            />
            <CardContainer
              categoryNumber={5}
              isPlay={isPlay}
              setIsPlay={setIsPlay}
              gameMode={gameMode}
              setGameMode={setGameMode}
              setCurrentPage={setCurrentPage}
            />
          </Route>
          <Route path="/Emotions">
            <Header
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              isPlay={isPlay}
              setIsPlay={setIsPlay}
              gameMode={gameMode}
              setGameMode={setGameMode}
            />
            <CardContainer
              categoryNumber={6}
              isPlay={isPlay}
              setIsPlay={setIsPlay}
              gameMode={gameMode}
              setGameMode={setGameMode}
              setCurrentPage={setCurrentPage}
            />
          </Route>
          <Route path="/Categories">
            <AdminHeader />
            <Categories
              setCurrentCategory={setCurrentCategory}
              setCurrentCategoryName={setCurrentCategoryName}
            />
          </Route>
          <Route path="/Word">
            <AdminHeader />
            <WordsContainer id={currentCategory} />
          </Route>
          <Route path="/Login">
            <Header
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              isPlay={isPlay}
              setIsPlay={setIsPlay}
              gameMode={gameMode}
              setGameMode={setGameMode}
            />
            <LoginModal />
          </Route>
          <Route path="/Add_category">
            <AdminHeader />
            <AddCategoriesModal />
          </Route>
          <Route path="/Edit_category">
            <AdminHeader />
            <EditCategoriesModal
              currentCategory={currentCategory}
              currentCategoryName={currentCategoryName}
            />
          </Route>
          <Redirect from="/" to="/Home" />
        </Switch>
      </div>
    );
  }
}
export default withRouter(Routing);
