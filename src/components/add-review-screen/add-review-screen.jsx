import React from "react";
import {PropTypes} from "prop-types";
import {Link} from "react-router-dom";
import LogoHeader from "../logo-header/logo-header";
import UserBlock from "../user-block/user-block";
import AddReviewForm from "../add-review-form/add-review-form";

const AddReviewScreen = (props) => {
  const {promoFilm} = props;
  const {bgImage, title, image} = promoFilm;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={`img/${bgImage}`} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">

          <LogoHeader />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to="/films/:id" className="breadcrumbs__link">{title}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock />

        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={`img/${image}`} alt={title} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">

        <AddReviewForm />

      </div>

    </section>
  );
};

AddReviewScreen.propTypes = {
  promoFilm: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    bgImage: PropTypes.string.isRequired
  })
};

export default AddReviewScreen;
