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
    <Container id="research">
      <Title>Our Projects</Title>
      <ResearchItem>
        <ResearchTitle>The single-cell transcriptomic analysis of myeloid-derived suppressor cells in lung cancer</ResearchTitle>
        <ResearchBody>
        Turkish National Institute of Health (TÜSEB) 2024-B01 <br/>
          Researchers: Asst. Prof. Dr. Yasin Kaymaz  <br/>
          Contributors: Prof. Dr. Güneş Esendağlı, Prof. Dr. Tuncay Göksel, Prof. Dr. Ayşe Caner, Dr. Haydar Soydaner Karakuş, Dr. Ufuk Mert, PhD Candidate Ebru Kocakaya
        </ResearchBody>
      </ResearchItem>
      <ResearchItem>
        <ResearchTitle>Extension of endSeqTools with single-cell RNAseq data</ResearchTitle>
        <ResearchBody>
        Scientific and Technological Research Council of Turkey (TÜBİTAK) 1002 <br/>
          Researchers: Asst. Prof. Dr. Yasin Kaymaz <br/>
          Contributors: Amir Amiri Tabat, Melike Güler, Elyar Bafandeh Zendeh
        </ResearchBody>
      </ResearchItem>
      <ResearchItem>
        <ResearchTitle>Enrichment of Alternative Target Antigen Pool for Car T Cell Therapy Against Non-Small Cell Lung Cancer with Single-Cell Genomic Data</ResearchTitle>
        <ResearchBody>
        Scientific and Technological Research Council of Turkey (TÜBİTAK) 3501 <br/>
          Researchers: Asst. Prof. Dr. Yasin Kaymaz, Prof. Dr. Ayşe Caner, Prof. Dr. Ali Veral, Prof. Dr. Kutsal Turhan, Assoc. Prof. Dr. Tevfik İlker Akçam, Prof. Dr. Hasan Bulut <br/>
          Contributors: PhD Candidate Ebru Kocakaya, Duygu Keremitçi, Ozan Göçmen, Beyza Aygün
        </ResearchBody>
      </ResearchItem>
      <ResearchItem>
        <ResearchTitle>Investigation of Biomarker Features of Alternative Transcript Isoforms in Tumor-Associated Macrophage Plasticity Using Single-Cell RNA Sequencing Approach</ResearchTitle>
        <ResearchBody>
        Turkish National Institute of Health (TÜSEB) 2022-B-01 <br/>
          Researchers: Asst. Prof. Dr. Yasin Kaymaz, Prof. Dr. Hilal Kazan, Prof. Dr. Güneş Esendağlı, Prof. Dr. Ayşe Caner <br/>
          Contributors: PhD Candidate Ebru Kocakaya, PhD Candidate Hamdullah Yanık, Postdoc Ece Tavukçuoğlu
        </ResearchBody>
      </ResearchItem>
      <ResearchItem>
        <ResearchTitle>Development of Expert System for Personalized Bioinformatics Analysis</ResearchTitle>
        <ResearchBody>
        Scientific and Technological Research Council of Turkey (TÜBİTAK) TEYDEB <br/>
          Researchers: Asst. Prof. Dr. Yasin Kaymaz, Talha Güler, Hasan Bulut <br/>
          Contributors: Amir Amiri Tabat, Gözde Şimşek, Elif Duymaz, Burak Aydınoğlu
        </ResearchBody>
      </ResearchItem>
      <ResearchItem>
        <ResearchTitle>Development of Analysis Pathway for Transcriptome Profiling of Gastroesophageal Reflux Disease Phenotypes with RNA Sequencing</ResearchTitle>
        <ResearchBody>
          EGE UNIVERSITY - ALİYE ÜSTER FOUNDATION <br/>
          Researchers: Asst. Prof. Dr. Yasin Kaymaz, Postdoc Pelin Ergün, PhD Sezgi Kıpçak
        </ResearchBody>
      </ResearchItem>
      <ResearchItem>
        <ResearchTitle>Development of a Bioinformatics Approach for Determining Functional Subgroups Based on Gene Set Scoring in Single-Cell Transcriptomics Data</ResearchTitle>
        <ResearchBody>
        Scientific and Technological Research Council of Turkey (TÜBİTAK) COST 2515 <br/>
          Researchers: Asst. Prof. Dr. Yasin Kaymaz <br/>
          Contributors: PhD Candidate Ebru Kocakaya, Zeynep Garan
        </ResearchBody>
      </ResearchItem>
      <ResearchItem>
        <ResearchTitle>Development of a Machine Learning Model for Classifying Tumor-Associated Macrophage Cells into Subgroups</ResearchTitle>
        <ResearchBody>
        Turkish National Institute of Health (TÜSEB) A2-YL <br/>
          Researchers: Asst. Prof. Dr. Yasin Kaymaz, PhD Candidate Duygu Keremitçi <br/>
          Contributors: Prof. Dr. Güneş Esendağlı, PhD Candidate Ebru Kocakaya, PhD Candidate Hamdullah Yanık, Postdoc Ece Tavukçuoğlu
        </ResearchBody>
      </ResearchItem>
      <ResearchItem>
        <ResearchTitle>Rat Brain Atlas Project- Single cell survey of Rat brain</ResearchTitle>
        <ResearchBody>
          Researchers: Boehringer Ingelheim <br/>
          Contributors: Asst. Prof. Dr. Yasin Kaymaz, Nathan Lawless, Kelly Allers
        </ResearchBody>
      </ResearchItem>
    </Container>
  );
};

export default ResearchList;
