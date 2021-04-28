import './body.scss'
import Discover from '../discover/discover'
import SlowDown from '../slowdown/slowdown'
import Section from '../section/section'

const Body = () => {
    return (
        <div className='body'>
          <Discover />
          <SlowDown />
          <Section />
        </div>
    )
}
export default Body