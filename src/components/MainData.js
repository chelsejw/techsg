import React from 'react'
import Table from './Table'
import RingLoader from 'react-spinners/RingLoader'

const MainData = (props) => {

    const {failure, loading, lastUpdate, data} = props

    return (
      <div>
        {!failure && !loading && (
          <div>
            <div className="text-right last-add-jobs">
              Last added jobs: {lastUpdate} SGT
            </div>
            <Table firstIndex={props.firstIndex} data={data} />
          </div>
        )}
        {loading && (
          <div className="my-5">
            <RingLoader
              css={"margin: 0 auto;"}
              color={"#d84242"}
              size={150}
              loading={loading}
            />
            <div className="text-center mt-3">
              <span className="main-loading-txt">Getting jobs...</span>
              {props.longLoadTime &&
                "This is taking a while because Heroku is slow... I promise I'll find a better home for my backend..."}
            </div>
          </div>
        )}

        {failure && (
          <div className="text-center mt-3">
            <span className="main-loading-txt">Failed to get jobs.</span>
          </div>
        )}
      </div>
    );
}

export default MainData