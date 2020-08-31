import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from './components/Nav'
import moment from 'moment'
import Options from './components/Options'
import MainData from './components/MainData'
import SupportedHeader from './components/SupportedHeader'
import Paginator from './components/Paginator'

const App = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(null)
    const [failure, setFailure] = useState(false)
    const [lastUpdate, setLastUpdate] = useState({})
    const [stack, setStack] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [sort, setSort] = useState("default")
    const [pagination, setPagination] = useState({})
    const [company, setCompany] = useState(null)
    const [queries, setQueries] = useState(null)
    const [longLoadTime, setLongLoadTime] = useState(false)

    useEffect(() => {
      setLoading();
      setTimeout(()=> {
        setLongLoadTime(true)
      }, 5000)
      let stackUrlString;
      if (queries && queries.length > 0) {
        stackUrlString = `&stack=${queries.join("&stack=")}`
      }
      let companyUrlString = ""
      if (company) {
        companyUrlString = `&company=${company}`
      }
        axios.get(`https://tech-sg.herokuapp.com/jobs/?page=${currentPage}`)
        .then((res) => {
          console.log(res)
            setJobs(res.data.results);
            setPagination({
              count: res.data.count,
              next: res.data.next,
              prev: res.data.previous,
            })
            if (res.data.results.length > 0) {
              setLastUpdate((prev) => {
                return {
                  ...prev,
                  jobs: res.data.results[0].created_at,
                };
              });
            }
            setLoading(false)
            setLongLoadTime(false)
        })
        .catch((err) => {
          setLoading(false)
          setFailure(true)
          console.log(`Error in axios request`, err)
        })

        axios
          .get("https://tech-sg.herokuapp.com/tech")
          .then((res) => {
            setStack(res.data);
            setLastUpdate((prev) => {
              return {
                ...prev,
                tech: res.data[res.data.length - 1].created_at,
              };
            });
          })
          .catch((err) => {
            console.log(`Error in axios request for tech`, err);
          });
    }, []);

    useEffect(()=> {
      setLoading(true)
      let stackUrlString;
      if (queries && queries.length > 0) {
        stackUrlString = `&stack=${queries.join("&stack=")}`;
      }
      let companyUrlString = "";
      if (company) {
        companyUrlString = `&company=${company}`;
      }
        axios
          .get(`https://tech-sg.herokuapp.com/jobs?page=${currentPage}`)
          .then((res) => {
            console.log(res.data);
            setJobs(res.data.results);
            setPagination({
              count: res.data.count,
              next: res.data.next,
              prev: res.data.previous,
            });
            setLoading(false);
          })
          .catch((err) => {
            setLoading(false);
            setFailure(true);
            console.log(`Error in axios request`, err);
          });

    }, [currentPage, queries, company, sort])

    useEffect(()=> {
      console.log(jobs)
      console.log(stack)
    }, [jobs, stack, lastUpdate])

    const firstItemIndex = (itemsPerPage, currentPage) => {
      return itemsPerPage*(currentPage-1)+1
    }


    return (
      <div>
        <Nav />
        <div className="container">
          <h1 className="text-center main-header mb-2">Tech@SG</h1>

          <SupportedHeader
            lastUpdate={moment(lastUpdate.tech).format("DD MMMM YYYY")}
            stack={stack}
          />

          {/* <Options stack={stack} /> */}
          
          <Paginator
            current={currentPage}
            info={pagination}
            setPage={setCurrentPage}
          />

          <MainData
            firstIndex={firstItemIndex(20, currentPage)}
            longLoadTime={longLoadTime}
            loading={loading}
            failure={failure}
            lastUpdate={moment(lastUpdate.jobs).format("DD MMM, h:mm:ss a")}
            data={jobs}
          />

          <Paginator
            current={currentPage}
            info={pagination}
            setPage={setCurrentPage}
          />
        </div>
      </div>
    );

};


export default App;
