import { loadData } from "../services/api";

export const teamsData = async () => {
    const data = await loadData("/teams");
                
    const team = data.map(item => ({
        picture_path: item.logo,
        name: item.name
    }))

    return team;
}