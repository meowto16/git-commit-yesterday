const generateCommit = (commitMessage: string, commitDate: string) => {
    const date = new Date(commitDate)

    return [
        `GIT_COMMITTER_DATE="${date}"`,
        'git commit',
        ...(commitMessage ? [`-m "${commitMessage}"`] : []),
        `--date="${date}"`
    ].join(' ')
}

export default generateCommit
