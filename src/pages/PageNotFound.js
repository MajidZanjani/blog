import { Link } from 'react-router-dom';
import PageNF from '../assets/images/page-not-found.jpg';
import { useTitle } from '../hooks/useTitle';

export const PageNotFound = () => {
  useTitle('You are lost!');

  return (
    <section className="pageNotFound">
      <img src={PageNF} alt="PageNotFound" />
      <Link to="/">
        <button>Back To Home</button>
      </Link>
    </section>
  )
}
