import React from "react";

import { useRouter } from 'next/router';

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Loading from '../../../components/Loading/Loading';

import Admin from "../../../layouts/Admin.js";

import styles from "../../../assets/jss/nextjs-material-dashboard-pro/views/characterPageStyle";

import API from "../../../services/api.js";

import { Character } from '../../api/character/getCharacterResponse';
import { Table, TableBody, TableCell, TableHead } from '@material-ui/core';
import RegularButton from '../../../components/CustomButtons/Button.js';
import Link from 'next/link';

function CharacterPage() {
  /*@ts-ignore*/
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const router = useRouter();
  const { id } = router.query;
  const [loaded, setLoaded] = React.useState<boolean>(false);
  const [data, setData] = React.useState<Character>({
    id: null,
    name: '',
    status: '',
    type: '',
    gender: '',
    origin: '',
    location: '',
    image: '',
  });

  React.useEffect(() => {
    setLoaded(false);
    var characterReturn = API.get(`/character/` + id
    ).then((response) => {
      let characterResponse = response.data;
      let characterData: Character;

      characterData = {
        id: characterResponse.id,
        name: characterResponse.name,
        status: characterResponse.status,
        type: characterResponse.type,
        gender: characterResponse.gender,
        origin: characterResponse.origin.name,
        location: characterResponse.location.name,
        image: characterResponse.image,
      };

      setData(characterData);

      setLoaded(true);

      return characterReturn;
    }
    ).catch((err) => {
      console.error("ops! ocorreu um erro" + err);
      setLoaded(true);
      return null;
    });
  }, []);

  return (
    <div className={classes.container}>
      <Loading promiseInProgress={!loaded} />
      <GridContainer justify="center" className={classes.backgroundGrid}>
        <GridItem xs={12} sm={12} md={12}>
          <img src={data.image} className={classes.imageCharacter} />
        </GridItem>
        <div className={classes.CharacterInfo}>
          <h4 className={classes.CharacterTitle}>
            {data.name}
          </h4>
          <h4 className={classes.CharacterAdress}>
            <b>Gênero:</b> {data.gender}<br></br>
            <b>Tipo:</b> {data.type}<br></br>
            <b>Origem:</b> {data.origin}<br></br>
            <b>Localização:</b> {data.location}<br></br>
            <b>Status:</b> {data.status}
          </h4>
        </div>
        <div className={classes.buttonCenter}>
          <Link href="/admin/personagens">
            <a>
              {/*@ts-ignore*/}
              <RegularButton color="danger">Voltar</RegularButton>
            </a>
          </Link>
        </div>
      </GridContainer>
    </div>
  )
}

CharacterPage.layout = Admin;

export default CharacterPage;