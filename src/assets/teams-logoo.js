import { loadData } from "../services/api";

export const teamsData = async () => {
    const data = await loadData("/teams");
    if(data.length > 0){      
    const team = data.map(item => ({
        picture_path: item.logo,
        name: item.name
    }))

    return team;
}else{
        return [];
    }

}