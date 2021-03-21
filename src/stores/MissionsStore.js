import { observable, action, runInAction } from "mobx";
import axios from "axios";

export default class MissionsStore {
  missions = [];
  status = "initial";

  fetchMissions = async (mission) => {
    this.status = "searching";
    this.missions = [];

    try {
      const res = await axios.get("https://api.spacexdata.com/v3/launches");
      this.setMissions(res.data);
    } catch (error) {
      runInAction(() => {
        this.status = "error";
      });
    }
  };

  setMissions = (missions) => {
    this.missions = missions;
    this.status = "done";
  };
}
