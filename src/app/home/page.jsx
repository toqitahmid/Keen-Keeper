import {Plus} from 'lucide-react';
import FriendsPage from '../friends/page';
const HomePage = () => {
    return (
      <>
        <div className="lg:w-9/12 md:w-10/12 w-11/12 mx-auto bg-base-200 rounded-2xl lg:my-20 md:my-10 my-8 lg:p-10 md:p-5 p-2 shadow">
          <div className="text-center space-y-5">
            <h1 className="lg:text-5xl md:text-4xl text-2xl font-bold">
              Friends to keep close in your life
            </h1>
            <p className="opacity-70">
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the relationships that matter most.
            </p>
            <button className="btn btn-accent flex items-center justify-self-center">
              <Plus></Plus>
              <p>Add a Friend</p>
            </button>
          </div>
        </div>
        <div className="lg:w-9/12 md:w-10/12 w-11/12 mx-auto grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-3 text-center">
          <div className="bg-base-200 p-3 shadow rounded-2xl">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold">06</p>
            <p className="lg:text-xl opacity-70">Total Friends</p>
          </div>
          <div className="bg-base-200 p-3 shadow rounded-2xl">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold">02</p>
            <p className="lg:text-xl opacity-70">On Track</p>
          </div>
          <div className="bg-base-200 p-3 shadow rounded-2xl">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold">06</p>
            <p className="lg:text-xl opacity-70">Need Attention</p>
          </div>
          <div className="bg-base-200 p-3 shadow rounded-2xl">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold">12</p>
            <p className="lg:text-xl opacity-70">Interactions This Month</p>
          </div>
        </div>
        <FriendsPage/>
      </>
    );
};

export default HomePage;