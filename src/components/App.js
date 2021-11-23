import './App.css';
import Header from "./component/header/header"
import Footer from './component/footer/Footer';
import Main from './component/main';
import { useEffect, useState } from 'react';
import Intro from './component/intro/intro';
import { useParams } from 'react-router';
import { FetchContentData } from '../api/api';
import Spinner from '../spinner/spinner';

function ContentPage() {
  let paremeters = useParams();
  // console.log(paremeters.param)
  const [loading, setloading] = useState(false)
  const [dropdown, setdropdown] = useState(false);
  const [ContentPageTopic] = useState(paremeters.param);
  const [curr_Topic, setcurr_Topic] = useState(null)

  useEffect(() => {
    async function getData() {
      if (curr_Topic === null) {
        await FetchContentData(ContentPageTopic, setcurr_Topic);
      }
      setloading(false);
    }
    setloading(true);
    getData();
  }, [])
  // loading, curr_Topic
  return (
    <div className="app">
      <Header dropdown={dropdown} setdropdown={setdropdown} />
      {loading ? <Spinner /> : <>
        <Intro heading={curr_Topic?.heading[0]} videoLink={curr_Topic?.videoLink[0]} />
        <Main heading1={curr_Topic?.heading[1]} heading2={curr_Topic?.heading[2]} heading3={curr_Topic?.heading[3]} imageLink={curr_Topic?.imageLink[0]} courseRating={curr_Topic?.courseRating} ContentPageTopic={ContentPageTopic} />
        <Footer />
      </>}
    </div >
  );
}

export default ContentPage;
