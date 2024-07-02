// Import necessary modules
import React from 'react';
import styled,{ css } from 'styled-components';

// Define styled components
const Container = styled.div`
 
  display:flex;
  flex-direction: column;
  max-width: 80%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const ResearchItem = styled.div`
  margin-bottom: 20px;
  background: var(--navyblue);
  padding: 10px;
  border-radius:15px;
  width: 70vw;
  padding: 20px;
`;

const ResearchTitle = styled.h2`
  font-size: 1.2em;
  margin-bottom: 10px;
  font-weight:600
`;


const ResearchBody = styled.p`
  margin: 0;

  ${({ highlight }) => highlight && css`
    color: #0b5394;
    font-weight: bold;
  `}
`;

const ResearchList = () => {
  return (
    <Container  id="research">
      <Title>Our Projects</Title>
      <ResearchItem>
        <ResearchTitle>Extension of endSeqTools with single-cell RNAseq data</ResearchTitle>
        <ResearchBody >
        Scientific and Technological Research Council of Turkey (TÜBİTAK) 1002 <br/>
          Researchers: Yasin Kaymaz <br/>
          Contributors: Amir Amiri Tabat, Melike Güler, Elyar Bafandeh Zendeh
        </ResearchBody>
      </ResearchItem>
      <ResearchItem>
        <ResearchTitle>Enrichment of Alternative Target Antigen Pool for Car T Cell Therapy Against Non-Small Cell Lung Cancer with Single-Cell Genomic Data</ResearchTitle>
        <ResearchBody>
        Scientific and Technological Research Council of Turkey (TÜBİTAK) 3501 <br/>
          Researchers: Yasin Kaymaz, Ayşe Caner, Ali Veral, Kutsal Turhan, Tevfik İlker Akçam, Hasan Bulut <br/>
          Contributors: Ebru Kocakaya, Duygu Keremitçi, Ozan Göçmen, Beyza Aygün
        </ResearchBody>
      </ResearchItem>
      <ResearchItem>
        <ResearchTitle>Investigation of Biomarker Features of Alternative Transcript Isoforms in Tumor-Associated Macrophage Plasticity Using Single-Cell RNA Sequencing Approach</ResearchTitle>
        <ResearchBody>
        Turkish National Institute of Health (TÜSEB) 2022-B-01 <br/>
          Researchers: Yasin Kaymaz, Hilal Kazan, Güneş Esendağlı, Ayşe Caner <br/>
          Contributors: Ebru Kocakaya, Hamdullah, Ece
        </ResearchBody>
      </ResearchItem>
      <ResearchItem>
        <ResearchTitle>Development of Expert System for Personalized Bioinformatics Analysis</ResearchTitle>
        <ResearchBody>
        Scientific and Technological Research Council of Turkey (TÜBİTAK) TEYDEB <br/>
          Researchers: Yasin Kaymaz, Talha Güler, Hasan Bulut <br/>
          Contributors: Amir Amiri Tabat, Gözde Şimşek, Elif Duymaz, Burak Aydınoğlu
        </ResearchBody>
      </ResearchItem>
      <ResearchItem>
        <ResearchTitle>Development of Analysis Pathway for Transcriptome Profiling of Gastroesophageal Reflux Disease Phenotypes with RNA Sequencing</ResearchTitle>
        <ResearchBody>
          EGE UNIVERSITY - ALİYE ÜSTER FOUNDATION <br/>
          Researchers: Yasin Kaymaz, Pelin Ergün, Sezgi Kıpçak
        </ResearchBody>
      </ResearchItem>
      <ResearchItem>
        <ResearchTitle>Development of a Bioinformatics Approach for Determining Functional Subgroups Based on Gene Set Scoring in Single-Cell Transcriptomics Data</ResearchTitle>
        <ResearchBody>
        Scientific and Technological Research Council of Turkey (TÜBİTAK) COST 2515 <br/>
          Researchers: Yasin Kaymaz <br/>
          Contributors: Ebru Kocakaya, Zeynep Garan
        </ResearchBody>
      </ResearchItem>
      <ResearchItem>
        <ResearchTitle>Development of a Machine Learning Model for Classifying Tumor-Associated Macrophage Cells into Subgroups</ResearchTitle>
        <ResearchBody>
        Turkish National Institute of Health (TÜSEB)  A2-YL <br/>
          Researchers: Duygu Keremitçi, Yasin Kaymaz <br/>
          Contributors: Ebru Kocakaya, Hamdullah, Ece, Güneş Esendağlı
        </ResearchBody>
      </ResearchItem>
      <ResearchItem>
        <ResearchTitle>Rat Brain Atlas Project- ‘Single cell survey of Rat brain</ResearchTitle>
        <ResearchBody>
          Researchers: Boehringer Ingelheim <br/>
          Contributors: Yasin KAYMAZ, Nathan Lawless, Kelly Allers
        </ResearchBody>
      </ResearchItem>
    </Container>
  );
};

export default ResearchList;
