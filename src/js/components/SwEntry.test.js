
import { render, screen } from '@testing-library/react';
import SwEntry from './SwEntry';

test('check Characters single item entry', () => {
    const dataType = "characters";
    const entry = {
        name: 'Han Solo',
        birth_year: '123BBE',
        gender: 'male',
        height: '180'
    };

    render(<SwEntry type={dataType} data={entry}/>);

    const entryData = screen.getByText(/Han Solo/i);
    expect(entryData).toBeInTheDocument();

    const wrongEntryData = screen.queryByText(/Chewbacca/i);
    expect(wrongEntryData).not.toBeInTheDocument();
});

test('check Movies single item entry', () => {
    const dataType = "movies";
    const entry = {
        title: 'The Empire strikes back',
        director: 'Irvin Kershner'
    };

    render(<SwEntry type={dataType} data={entry}/>);

    const entryData = screen.getByText(/Irvin Kershner/i);
    expect(entryData).toBeInTheDocument();

    const wrongEntryData = screen.queryByText(/George Lucas/i);
    expect(wrongEntryData).not.toBeInTheDocument();
});

test('check Starships single item entry', () => {
    const dataType = "starships";
    const entry = {
        name: 'Death Star',
        model: 'DS-1 Orbital Battle Station'
    };

    render(<SwEntry type={dataType} data={entry}/>);

    const entryData = screen.getByText(/Death Star/i);
    expect(entryData).toBeInTheDocument();

    const wrongEntryData = screen.queryByText(/CR90 corvette/i);
    expect(wrongEntryData).not.toBeInTheDocument();
});

test('check Planets single item entry', () => {
    const dataType = "planets";
    const entry = {
        name: 'Yavin IV',
        rotation_period: '24'
    };

    render(<SwEntry type={dataType} data={entry}/>);

    const entryData = screen.getByText(/24 years/i);
    expect(entryData).toBeInTheDocument();

    const wrongEntryData = screen.queryByText(/1024/i);
    expect(wrongEntryData).not.toBeInTheDocument();
});

test('check Vehicles single item entry', () => {
    const dataType = "vehicles";
    const entry = {
        name: 'Sand Crawler',
        length: '36.8'
    };

    render(<SwEntry type={dataType} data={entry}/>);

    const entryData = screen.getByText(/36.8 m/i);
    expect(entryData).toBeInTheDocument();

    const wrongEntryData = screen.queryByText(/36.8 meters/i);
    expect(wrongEntryData).not.toBeInTheDocument();
});

test('check Species single item entry', () => {
    const dataType = "species";
    const entry = {
        name: 'Wookie',
        eye_colors: 'blue, green, yellow, brown, golden, red'
    };

    render(<SwEntry type={dataType} data={entry}/>);

    const entryData = screen.getByText(/golden/i);
    expect(entryData).toBeInTheDocument();

    const wrongEntryData = screen.queryByText(/black/i);
    expect(wrongEntryData).not.toBeInTheDocument();
});