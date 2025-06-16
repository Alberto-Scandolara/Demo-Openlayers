import React, {useEffect, useState} from 'react';
import {v4 as uuid} from 'uuid';

// Css
import './App.css';

// Assets
import userConfigJSON from "./assets/jsons/db/user-config.json";

// Constants
import {STRING_EMPTY} from "./constants/constants.constant";

// Components
import MapView from "./components/map/map.component";
import MapContainer from "./components/map/map.component";

// Hooks
import {useUser} from "./hooks/useUser.hook";

// Interfaces
import {User} from "./interfaces/user.interface";
import Controls from "./components/controls/controls.component";

function App() {
    const { isAuthenticated, login, setUserData } = useUser();
    const [loading, setLoading] = useState(true);

    useEffect((): void => {
        setToken();
        setUserConfig();
        setLoading(false);
    }, [login, setUserData]);
    if (loading || !isAuthenticated) {
        return <div className="spinner">Loading...</div>;
    }

    function fetchToken(): string {
        return uuid();
    }

    function fetchUserConfig(): Partial<User> {
        return {
            email: STRING_EMPTY,
            id: uuid(),
            ...userConfigJSON,
        };
    }

    function setToken(): void {
        const token: string | null = fetchToken();
        if(!token) {
            setLoading(false);
        }
        login(token);
    }

    function setUserConfig(): void {
        const userConfig: Partial<User> = fetchUserConfig();
        setUserData(userConfig);
    }

    return (
        <MapContainer>
        </MapContainer>
    );
}

export default App;