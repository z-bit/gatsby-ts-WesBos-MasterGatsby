import React from 'react'
import Nav from '../components/Nav'
import { HomePageGrid } from '../styles/Grids'
import { PersonLoadingGrid, PizzaLoadingGrid } from '../components/LoadingGrids'
import ItemGrid from '../components/ItemGrid'
import useLatestData from '../utils/useLatestData'

const CurrentlySlicing = ({ slicemasters }) => (
    <div>
        <h2 className="center">
            <span className="mark tilt">Slicemasters on Duty</span>
        </h2>
        <p>Standing by, ready to slice you up!</p>
        {!slicemasters && <PersonLoadingGrid count="4" />}
        {slicemasters && !slicemasters?.length && (
            <p>No one is working right now!</p>
        )}
        {slicemasters?.length && (
            <ItemGrid items={slicemasters} />
        )}
    </div>
)
const HotSlices = ({ hotSlices }) => (
    <div>
        <h2 className="center">
            <span className="mark tilt">Hot Slices on Offer</span>
        </h2>
        <p>All to be had by the slice!</p>
        {!hotSlices && <PizzaLoadingGrid count="4" />}
        {hotSlices && !hotSlices?.length && (
            <p>Sorry, no hot slices at the moment!</p>
        )}
        {hotSlices?.length && (
            <ItemGrid items={hotSlices} />
        )}
    </div>
)

export default function HomePage() {

    const { slicemasters, hotSlices } = useLatestData()

    return (
        <div className="center">
            <h1>The Best Pizza Downtown!</h1>
            <p>Open 11am to 11pm Every Single Day</p>
            <HomePageGrid>
                <CurrentlySlicing slicemasters={slicemasters} />
                <HotSlices hotSlices={hotSlices} />
            </HomePageGrid>
        </div>
    )
}
